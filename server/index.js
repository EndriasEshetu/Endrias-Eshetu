import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, "..", ".env");

dotenv.config({ path: envPath });

const MESSAGE_LIMIT = 500;
const DEFAULT_PORT = 4000;
const RETRYABLE_SMTP_ERRORS = new Set(["ETIMEDOUT", "ESOCKET"]);

const app = express();
const port = Number(process.env.PORT) || DEFAULT_PORT;
const receiverEmail =
  process.env.CONTACT_RECEIVER_EMAIL || "egataendrias@gmail.com";
const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = process.env.SMTP_SECURE
  ? process.env.SMTP_SECURE === "true"
  : smtpPort === 465;
const smtpFallbackPort = Number(
  process.env.SMTP_FALLBACK_PORT || (smtpPort === 465 ? 587 : 0),
);
const smtpConnectionTimeout = Number(
  process.env.SMTP_CONNECTION_TIMEOUT || 12000,
);
const smtpGreetingTimeout = Number(process.env.SMTP_GREETING_TIMEOUT || 12000);
const smtpSocketTimeout = Number(process.env.SMTP_SOCKET_TIMEOUT || 20000);
const smtpUser = process.env.SMTP_USER || "egataendrias@gmail.com";
const smtpPass = process.env.SMTP_PASS;

const dataDir = path.join(__dirname, "data");
const messagesFile = path.join(dataDir, "contact-messages.json");

const configuredOrigins = process.env.FRONTEND_ORIGIN
  ? process.env.FRONTEND_ORIGIN.split(",")
      .map((origin) => origin.trim())
      .filter(Boolean)
  : [];

function normalizeOrigin(origin) {
  return typeof origin === "string" ? origin.replace(/\/$/, "") : "";
}

const normalizedAllowedOrigins = new Set(
  configuredOrigins.map((origin) => normalizeOrigin(origin)),
);

const corsOrigin = (origin, callback) => {
  // Allow same-origin/non-browser requests (no Origin header).
  if (!origin) {
    callback(null, true);
    return;
  }

  if (normalizedAllowedOrigins.size === 0) {
    callback(null, true);
    return;
  }

  if (normalizedAllowedOrigins.has(normalizeOrigin(origin))) {
    callback(null, true);
    return;
  }

  console.warn("Blocked by CORS. Origin not allowed:", origin);
  callback(new Error("Not allowed by CORS"));
};

app.use(cors({ origin: corsOrigin }));
app.use(express.json({ limit: "100kb" }));

const hasSmtpConfig = Boolean(smtpPass);

function createMailTransporter(port, secure) {
  return nodemailer.createTransport({
    host: smtpHost,
    port,
    secure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    connectionTimeout: smtpConnectionTimeout,
    greetingTimeout: smtpGreetingTimeout,
    socketTimeout: smtpSocketTimeout,
  });
}

const primaryTransporter = hasSmtpConfig
  ? createMailTransporter(smtpPort, smtpSecure)
  : null;
const fallbackTransporter =
  hasSmtpConfig && smtpFallbackPort > 0 && smtpFallbackPort !== smtpPort
    ? createMailTransporter(smtpFallbackPort, false)
    : null;
let activeTransporter = primaryTransporter;
let activeTransporterLabel = `port ${smtpPort}${smtpSecure ? " (secure)" : ""}`;

const topics = new Set(["fullstack", "automation", "networking", "other"]);

function isRetryableSmtpError(error) {
  return Boolean(error?.code && RETRYABLE_SMTP_ERRORS.has(error.code));
}

function setFallbackTransporterAsActive() {
  activeTransporter = fallbackTransporter;
  activeTransporterLabel = `port ${smtpFallbackPort} (starttls)`;
}

function logSmtpSendResult(info) {
  console.log("SMTP send result:", {
    transporter: activeTransporterLabel,
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  });
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validateContactPayload(payload) {
  const name = normalizeText(payload?.name);
  const email = normalizeText(payload?.email);
  const topic = normalizeText(payload?.topic);
  const message = normalizeText(payload?.message);

  if (!name || name.length < 2 || name.length > 80) {
    return { error: "Name must be between 2 and 80 characters." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "A valid email is required." };
  }

  if (!topics.has(topic)) {
    return { error: "Please choose a valid topic." };
  }

  if (!message || message.length < 10 || message.length > 2000) {
    return { error: "Message must be between 10 and 2000 characters." };
  }

  return {
    data: {
      name,
      email,
      topic,
      message,
    },
  };
}

async function readMessages() {
  try {
    const raw = await readFile(messagesFile, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function saveMessage(entry) {
  await mkdir(dataDir, { recursive: true });
  const existing = await readMessages();
  const next = [entry, ...existing].slice(0, MESSAGE_LIMIT);
  await writeFile(messagesFile, JSON.stringify(next, null, 2), "utf-8");
}

async function sendContactEmail(entry) {
  if (!activeTransporter) {
    return false;
  }

  const topicLabel =
    entry.topic.charAt(0).toUpperCase() + entry.topic.slice(1).toLowerCase();

  const message = {
    from: `Portfolio Contact <${smtpUser}>`,
    to: receiverEmail,
    replyTo: entry.email,
    subject: `New portfolio message: ${topicLabel}`,
    text: [
      `Name: ${entry.name}`,
      `Email: ${entry.email}`,
      `Topic: ${entry.topic}`,
      "",
      "Message:",
      entry.message,
      "",
      `Received at: ${entry.createdAt}`,
    ].join("\n"),
  };

  try {
    const info = await activeTransporter.sendMail(message);
    logSmtpSendResult(info);
  } catch (error) {
    const shouldTryFallback =
      fallbackTransporter &&
      activeTransporter !== fallbackTransporter &&
      isRetryableSmtpError(error);

    if (!shouldTryFallback) {
      throw error;
    }

    console.warn(
      `SMTP on ${activeTransporterLabel} failed (${error.code}). Retrying on port ${smtpFallbackPort}.`,
    );

    const info = await fallbackTransporter.sendMail(message);
    setFallbackTransporterAsActive();
    logSmtpSendResult(info);
  }

  return true;
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "contact-api" });
});

app.post("/api/contact", async (req, res) => {
  const result = validateContactPayload(req.body);

  if (result.error) {
    return res.status(400).json({ ok: false, message: result.error });
  }

  const entry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...result.data,
  };

  try {
    await saveMessage(entry);
  } catch (error) {
    console.error("Saving contact message failed:", error);

    return res.status(500).json({
      ok: false,
      message: "Could not save your message right now. Please try again.",
    });
  }

  try {
    const sent = await sendContactEmail(entry);

    return res.status(201).json({
      ok: true,
      message: sent
        ? "Message received and delivered by email."
        : "Message received. Email delivery is currently disabled on the server.",
    });
  } catch (error) {
    console.error("SMTP delivery failed:", error);

    return res.status(201).json({
      ok: true,
      message:
        "Message received and saved, but email delivery failed. Check SMTP credentials.",
    });
  }
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, message: "Route not found." });
});

async function verifySmtpConnection() {
  if (!activeTransporter) {
    console.log("SMTP not configured. Messages are saved locally only.");
    console.log("Set SMTP_PASS in .env to enable auto-forwarding email.");
    return;
  }

  try {
    await activeTransporter.verify();
    console.log(
      `SMTP ready on ${activeTransporterLabel}: email auto-forwarding is active.`,
    );
  } catch (error) {
    const shouldTryFallback =
      fallbackTransporter &&
      activeTransporter !== fallbackTransporter &&
      isRetryableSmtpError(error);

    if (shouldTryFallback) {
      try {
        await fallbackTransporter.verify();
        setFallbackTransporterAsActive();
        console.log(
          `SMTP ready on ${activeTransporterLabel}: email auto-forwarding is active.`,
        );
        return;
      } catch (fallbackError) {
        console.error("SMTP fallback verify failed:", fallbackError);
      }
    }

    console.error("SMTP auth/config failed:", error);
    console.log(
      "Check SMTP_USER/SMTP_PASS and SMTP_HOST/SMTP_PORT, then restart server.",
    );
  }
}

app.listen(port, async () => {
  console.log(`Contact API running on http://localhost:${port}`);
  console.log(`Contact receiver email: ${receiverEmail}`);

  await verifySmtpConnection();
});
