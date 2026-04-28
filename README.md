# Endrias Eshetu Portfolio

A modern full-stack portfolio website built with React, TypeScript, Vite, Tailwind CSS, and an Express contact API.

## Live Site

- Production: [https://endrias.tech/](https://endrias.tech/)

## Overview

This project includes:

- A polished single-page portfolio frontend with dark/light theme support
- Animated sections (scroll reveals, counters, hero parallax, particle background)
- Projects, technical skills, certificates, journey timeline, and social links
- A production-ready contact form with both client-side and server-side validation
- A Node/Express API that stores messages locally and optionally sends email via Resend

## Feature Highlights

### Frontend

- **Sticky responsive navbar**
  - Active section highlighting while scrolling
  - Mobile menu toggle with outside-click close behavior
  - Theme toggle (dark/light) with persisted preference in `localStorage`
- **Hero and About sections**
  - Downloadable CV button
  - Animated count-up stats that trigger on visibility
  - "Skip to main content" accessibility link
- **My Journey timeline**
  - Structured milestone timeline from foundation to future goals
- **Technical Skills**
  - Grouped skill cards (Frontend, Backend, Database, Tools)
  - Icon-based skills with visual accents and responsive layout
- **Tech-stack highlights**
  - Branded tech icons with theme-aware rendering tweaks
- **Projects section**
  - Horizontal card scroller with responsive snapping
  - Expand/collapse project details per card
  - External live-demo links
- **Certificates section**
  - Date-sorted certificates (newest first)
  - Expandable "See more / See less" list behavior
  - Support for credential links and PDF certificate links
- **Contact section**
  - Client-side validation for name, email, topic, and message length
  - Live email format feedback
  - Submission feedback states (`idle`, `submitting`, `success`, `error`)
  - Graceful handling for network/API errors
- **Footer**
  - Quick navigation links, social links, and back-to-top action

### Motion and UI System

- Reusable `ScrollReveal` component with multiple animation variants:
  - `fade-up`, `fade`, `slide-left`, `slide-right`, `scale`, `fade-scale`
- Motion accessibility with `prefers-reduced-motion` support
- Hero image parallax floating effect
- Dark-theme GPU particle background using `ogl`
- Theme-driven CSS variable system for consistent styling across sections

### Backend (Contact API)

- **Express API endpoints**
  - `GET /api/health` - health check
  - `POST /api/contact` - contact form submission
- **Validation and normalization**
  - Input trimming + email normalization
  - Topic validation (`fullstack`, `automation`, `networking`, `other`)
  - Length constraints for name/message
- **Persistence**
  - Stores messages in `server/data/contact-messages.json`
  - Retains most recent messages (up to 500 entries)
- **Email delivery**
  - Sends notification emails via Resend when configured
  - If email fails, submission is still saved and returns success with warning message
- **Security and runtime**
  - Configurable CORS allowlist (supports multiple origins)
  - JSON body limit configuration
  - 404 JSON fallback for unknown API routes

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4
- **UI/Animation:** Custom CSS variables, IntersectionObserver-based reveals, OGL particles
- **Icons:** Font Awesome + React Icons + Devicon CDN assets
- **Backend:** Node.js, Express 5, CORS, dotenv
- **Email:** Resend
- **Tooling:** ESLint, TypeScript, concurrently

## Project Structure

```text
web-portfolio/
  src/
    components/         # UI sections and reusable display components
    contexts/           # Theme context and persistence
    data/               # Portfolio content data (certificates, contact, etc.)
    hooks/              # Reusable hooks (in-view, reduced-motion)
    App.tsx             # Main app composition
  server/
    index.js            # Express API server
    data/               # Contact message storage
```

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

Copy `.env.example` to `.env` and update values:

```env
PORT=4000
FRONTEND_ORIGIN=http://localhost:5173,http://localhost:5174,https://endrias.tech,https://endrias.vercel.app
VITE_API_BASE_URL=http://localhost:4000
CONTACT_RECEIVER_EMAIL=your-email@example.com
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Environment variables:

- `PORT` - backend API port
- `FRONTEND_ORIGIN` - comma-separated CORS allowlist for frontend origins
- `VITE_API_BASE_URL` - frontend API base URL (empty uses same-origin `/api`)
- `CONTACT_RECEIVER_EMAIL` - inbox receiving contact submissions
- `RESEND_API_KEY` - enables email sending via Resend

### 3) Run the app

```bash
npm run dev
```

Runs backend + frontend together.

Or run separately:

```bash
npm run server
npm run dev:client
```

## Available Scripts

- `npm run dev` - start backend and frontend concurrently
- `npm run dev:full` - same as `dev` (alias)
- `npm run dev:client` - start Vite frontend only
- `npm run server` - start Express backend only
- `npm run build` - type-check and build frontend
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## API Reference

### `GET /api/health`

Returns service health.

Example response:

```json
{
  "ok": true,
  "service": "contact-api"
}
```

### `POST /api/contact`

Accepts:

```json
{
  "name": "Endrias Eshetu",
  "email": "endrias@gmail.com",
  "topic": "fullstack",
  "message": "I would like to discuss a project..."
}
```

Validation rules:

- `name`: 2-80 chars
- `email`: valid email format
- `topic`: one of `fullstack`, `automation`, `networking`, `other`
- `message`: 10-2000 chars

Response behavior:

- `400` for validation errors
- `201` when message is saved (with or without successful email delivery)

## Deployment Notes

### Backend deployment

- Start command: `npm run server`
- Health endpoint: `/api/health`
- Configure:
  - `FRONTEND_ORIGIN`
  - `CONTACT_RECEIVER_EMAIL`
  - `RESEND_API_KEY` (optional but recommended)

### Frontend deployment

- Build command: `npm run build`
- Set `VITE_API_BASE_URL` to deployed backend URL

## Additional Notes

- During local development, Vite proxies `/api/*` to `http://localhost:4000`.
- Contact submissions are always persisted locally before email attempt.
- If `RESEND_API_KEY` is missing/invalid, API can still save messages but email delivery will fail.
