# Endrias Eshetu Portfolio

A modern full-stack personal portfolio and Progressive Web Application (PWA) built with React 19, TypeScript, Vite, Tailwind CSS 4, and an Express backend featuring an AI Chatbot and a contact API.

## Live Site

- Production: [https://endrias.tech/](https://endrias.tech/)

## Overview

This project includes:

- **Interactive Frontend:** A polished single-page portfolio with dark/light theme support and rich animations (scroll reveals, stats counters, hero parallax, OGL particle canvas).
- **AI Chatbot (Endrias AI Assistant):** An embedded assistant powered by Google Gemini to answer questions about skills, projects, certificates, journey, and contact details.
- **Progressive Web App (PWA):** Installable on mobile and desktop devices with offline caching via Workbox and `vite-plugin-pwa`.
- **Comprehensive Sections:** Projects with live demos/source code, technical skill categories, verified certificates, milestone journey timeline, and contact links.
- **Production-Ready Contact API:** Form submission with dual-layer validation, local persistence, rate-limiting, and email delivery via Resend.

---

## Feature Highlights

### AI Chatbot (Endrias AI Assistant)

- **Context-Grounded Knowledge:** Answers queries strictly using curated portfolio context ([`server/config/chatbotContext.js`](file:///c:/HTML/web-portfolio/server/config/chatbotContext.js) and [`server/config/chatbotPrompt.js`](file:///c:/HTML/web-portfolio/server/config/chatbotPrompt.js))—covering professional experience, projects, skills, certificates, and hiring/collaboration inquiries.
- **Modular Component Architecture:**
  - `ChatbotLauncher`: Floating action button with pulse indicator and outside-click/escape-key dismissal.
  - `ChatbotWindow`: Constrained viewport container avoiding navigation and UI clipping.
  - `ChatHeader`: Status badge, title, subtitle, and close controls.
  - `ChatMessageList` & `ChatMessageItem`: Speech bubble feeds with smooth auto-scroll.
  - `SuggestionChips`: Quick-prompt pills for rapid visitor engagement.
  - `ChatInput`: Character-limited (500 chars), accessible input with loading feedback.
- **Multi-Model Fallback Engine:** Server seamlessly handles API load spikes by cascading through candidate Gemini models (`gemini-3-flash-preview`, `gemini-3.8-flash`, etc.).
- **Rate-Limited & Secure:** Protected by `express-rate-limit` to prevent abuse; API keys are kept exclusively on the server.
- **Universal Responsiveness:** Formatted specifically for desktop, tablet, mobile, and small mobile viewports with theme alignment.

### Progressive Web App (PWA)

- **Installable Experience:** Full Web App Manifest configuration for a native app feel (`standalone` display, portrait orientation, customized `#0a0a0a` theme).
- **High-Resolution Icons:** Standard and maskable adaptive icons (192x192, 512x512) and Apple Touch Icons.
- **Offline Caching (Workbox):**
  - Google Fonts caching with `StaleWhileRevalidate` and `CacheFirst` strategies.
  - Image and static asset caching with expiration policies.
  - Automatic service worker updates via `registerType: "autoUpdate"`.

### Frontend Experience

- **Sticky Responsive Navbar:**
  - Active section spy highlighting.
  - Mobile dropdown menu with outside-click detection.
  - Dark/light mode switcher persisted in `localStorage`.
- **Hero & About:**
  - Downloadable CV button.
  - Animated count-up metrics triggered upon entering viewport.
  - Accessibility skip-to-content anchor.
- **My Journey Timeline:**
  - Interactive milestone path tracking foundation, growth, real-world systems, and future vision.
- **Technical Skills & Stack Highlights:**
  - Categorized skill cards (Frontend, Backend, Database, Tools & Workflow).
  - Branded tech-stack highlight badges.
- **Projects Section:**
  - Horizontal snap-scroller for touch and desktop.
  - Per-card expandable details, GitHub repository buttons, and live previews.
- **Certificates Section:**
  - Chronologically sorted credentials with expandable view.
  - Verified Credly badges and direct PDF previews.
- **Contact Form:**
  - Client-side validation for name, email, topic, and message.
  - Submission states (`idle`, `submitting`, `success`, `error`).
- **Motion & Visuals:**
  - Reusable `ScrollReveal` variants (`fade-up`, `slide-left`, `slide-right`, `scale`, `fade-scale`).
  - Respects `prefers-reduced-motion` user preferences.
  - GPU-accelerated OGL particle canvas on dark theme.

### Backend (Express API)

- **Chatbot Endpoint (`POST /api/chat`):**
  - Powered by `@google/genai`.
  - IP-based rate limiting via `express-rate-limit`.
  - Chat history truncation to maintain optimal context window and performance.
- **Contact Endpoints:**
  - `GET /api/health` - API health check.
  - `POST /api/contact` - Saves form messages locally (`server/data/contact-messages.json`) and delivers emails via Resend.
- **Security & Runtime:**
  - Dynamic CORS whitelist matching local and production domains.
  - Request body limits to prevent payload attacks.
  - Auto-reloading development server (`node --watch`).

---

## Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS 4 |
| **PWA & Offline** | `vite-plugin-pwa`, Workbox |
| **AI Integration** | Google Gemini SDK (`@google/genai`) |
| **UI & Animation** | Custom CSS Variables, OGL (Particles), FontAwesome, React Icons |
| **Backend** | Node.js, Express 5, CORS, `express-rate-limit`, `dotenv` |
| **Email Services** | Resend |
| **Tooling** | ESLint, TypeScript, Concurrently |

---

## Project Structure

```text
web-portfolio/
├── public/                 # Favicons, PWA icons, certificates, assets
├── server/
│   ├── config/
│   │   ├── chatbotContext.js # Grounded portfolio knowledge base
│   │   └── chatbotPrompt.js  # System instructions builder
│   ├── data/               # Persistent JSON storage for contact messages
│   └── index.js            # Express API server (Chatbot + Contact)
├── src/
│   ├── components/
│   │   ├── chatbot/        # Modular chatbot components (Launcher, Window, Header, Input, etc.)
│   │   ├── About.tsx       # Bio and statistics
│   │   ├── CertificatesSection.tsx # Certificate showcase
│   │   ├── ContactSection.tsx      # Contact form
│   │   ├── MyJourney.tsx   # Milestone timeline
│   │   ├── Navbar.tsx      # Responsive header navbar
│   │   ├── Particles.tsx   # OGL background animation
│   │   ├── ProjectsSection.tsx # Projects carousel
│   │   ├── ScrollReveal.tsx    # Animation wrapper
│   │   └── SkillSection.tsx    # Skills breakdown
│   ├── contexts/           # Theme context (dark/light)
│   ├── data/               # Static datasets (certificates, contact details)
│   ├── services/           # API clients (chatbotService)
│   ├── types/              # TypeScript interfaces
│   ├── App.tsx             # Root component composition
│   └── main.tsx            # App mounting & PWA registration
├── .env.example            # Environment variables template
├── package.json
└── vite.config.ts          # Vite, Tailwind, and PWA configurations
```

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your values:

```env
PORT=4000
FRONTEND_ORIGIN=http://localhost:5173,http://localhost:5174,https://endrias.tech,https://endrias.vercel.app
VITE_API_BASE_URL=http://localhost:4000
CONTACT_RECEIVER_EMAIL=your-email@example.com
RESEND_API_KEY=re_xxxxxxxxxxxx
GEMINI_API_KEY=your_gemini_api_key_here
CHATBOT_RATE_LIMIT_MAX=20
CHATBOT_RATE_LIMIT_WINDOW_MS=600000
```

### 3. Run the development environment

```bash
npm run dev
```

This concurrently starts:
- The Express backend at `http://localhost:4000` (with `--watch` auto-reloading).
- The Vite frontend development server at `http://localhost:5173`.

---

## Available Scripts

- `npm run dev`: Runs frontend and backend concurrently.
- `npm run dev:client`: Runs the Vite frontend only.
- `npm run server`: Runs the Express server with `--watch`.
- `npm run build`: Type-checks and builds the frontend bundle with PWA assets.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Executes ESLint code quality checks.

---

## API Reference

### 1. Chatbot API

#### `POST /api/chat`
Sends a query with optional conversation history to the Gemini-backed portfolio assistant.

- **Rate Limit:** 20 requests / 10 minutes per IP (configurable).
- **Body:**
```json
{
  "message": "What technologies does Endrias use?",
  "history": [
    { "role": "user", "content": "Hi" },
    { "role": "assistant", "content": "Hello! How can I help you today?" }
  ]
}
```
- **Response (`200 OK`):**
```json
{
  "ok": true,
  "reply": "Endrias is a full-stack developer who specializes in React, Node.js, TypeScript, Express, and MongoDB..."
}
```

---

### 2. Contact API

#### `GET /api/health`
Returns service status.

```json
{
  "ok": true,
  "service": "contact-api"
}
```

#### `POST /api/contact`
Submits a message through the contact form.

- **Body:**
```json
{
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "topic": "fullstack",
  "message": "I'd like to discuss a freelance project opportunity."
}
```
- **Validation Rules:**
  - `name`: 2–80 characters.
  - `email`: Valid email structure.
  - `topic`: One of `fullstack`, `automation`, `networking`, `other`.
  - `message`: 10–2000 characters.
- **Response (`201 Created`):**
```json
{
  "ok": true,
  "message": "Message received! Thanks for reaching out."
}
```

---

## Deployment

### Backend (e.g., Render, Railway, VPS)
- **Start Command:** `npm run server`
- Ensure all environment variables from `.env` are set in the hosting dashboard (`FRONTEND_ORIGIN`, `GEMINI_API_KEY`, `RESEND_API_KEY`, etc.).

### Frontend (e.g., Vercel, Netlify)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- Set `VITE_API_BASE_URL` to your deployed backend URL.
