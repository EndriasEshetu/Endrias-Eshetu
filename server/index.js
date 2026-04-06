import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Resend } from "resend";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, "..", ".env");

dotenv.config({ path: envPath });

const app = express();
const port = Number(process.env.PORT) || 4000;

const resend = new Resend(process.env.RESEND_API_KEY);

const receiverEmail =
  process.env.CONTACT_RECEIVER_EMAIL || "egataendrias@gmail.com";

const dataDir = path.join(__dirname, "data");
const messagesFile = path.join(dataDir, "contact-messages.json");

const MESSAGE_LIMIT = 500;

const defaultAllowedOrigins = [
  "https://endrias.tech",
  "https://endrias.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];

const configuredOrigins = process.env.FRONTEND_ORIGIN
  ? process.env.FRONTEND_ORIGIN.split(",").map((o) => o.trim())
  : [];

function normalizeOrigin(origin) {
  return typeof origin === "string" ? origin.replace(/\/$/, "") : "";
}

const allowedOrigins = new Set(
  [...defaultAllowedOrigins, ...configuredOrigins]
    .map(normalizeOrigin)
    .filter(Boolean),
);

const corsOrigin = (origin, callback) => {
  if (!origin) return callback(null, true);

  if (allowedOrigins.size === 0) return callback(null, true);

  if (allowedOrigins.has(normalizeOrigin(origin))) {
    return callback(null, true);
  }

  console.warn("Blocked by CORS:", origin);
  callback(new Error("Not allowed by CORS"));
};

app.use(
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.options("*", cors({ origin: corsOrigin }));
app.use(express.json({ limit: "100kb" }));

const topics = new Set(["fullstack", "automation", "networking", "other"]);

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
    return { error: "Valid email required." };
  }

  if (!topics.has(topic)) {
    return { error: "Invalid topic." };
  }

  if (!message || message.length < 10 || message.length > 2000) {
    return { error: "Message must be between 10 and 2000 characters." };
  }

  return {
    data: { name, email, topic, message },
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

  await writeFile(messagesFile, JSON.stringify(next, null, 2));
}

async function sendContactEmail(entry) {
  const topicLabel = entry.topic.charAt(0).toUpperCase() + entry.topic.slice(1);

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: receiverEmail,
    subject: `New portfolio message: ${topicLabel}`,
    text: `
Name: ${entry.name}
Email: ${entry.email}
Topic: ${entry.topic}

Message:
${entry.message}

Received: ${entry.createdAt}
`,
    reply_to: entry.email,
  });
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
  } catch (err) {
    console.error("Save failed:", err);

    return res.status(500).json({
      ok: false,
      message: "Could not save message.",
    });
  }

  try {
    await sendContactEmail(entry);

    return res.status(201).json({
      ok: true,
      message: "Message received and delivered by email.",
    });
  } catch (err) {
    console.error("Email failed:", err);

    return res.status(201).json({
      ok: true,
      message: "Message saved but email delivery failed.",
    });
  }
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, message: "Route not found." });
});

app.listen(port, () => {
  console.log(`Contact API running on port ${port}`);
});
