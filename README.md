# Endrias Eshetu Portfolio

## Purpose

This repository contains a professional web portfolio that presents technical experience, selected projects, certifications, achievements, and a contact channel for collaboration opportunities.

The application is designed to:

- Establish a clear online professional presence
- Showcase practical software engineering work and skills
- Enable visitors to submit contact requests through a secure backend API

## Overview

The project consists of:

- A frontend single-page application built with React, TypeScript, and Vite
- A backend Express API that receives contact form submissions
- Optional SMTP email forwarding for incoming contact messages
- Local JSON persistence for submitted contact messages

## Technology Stack

- React 19
- TypeScript
- Vite
- Express.js
- Nodemailer
- ESLint

## Project Structure

- `src/` Frontend application source code
- `server/` Backend API and storage logic
- `server/data/contact-messages.json` Local storage for contact submissions
- `public/` Static assets

## Prerequisites

- Node.js 18+ (recommended LTS)
- npm 9+

## Installation

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the project root (you can copy `.env.example`).

Required and optional variables:

- `PORT` Backend server port (default: `4000`)
- `FRONTEND_ORIGIN` Allowed CORS origin(s) for frontend access
- `VITE_API_BASE_URL` Frontend API base URL
- `CONTACT_RECEIVER_EMAIL` Destination email for contact notifications
- `SMTP_HOST` SMTP host (default: `smtp.gmail.com`)
- `SMTP_PORT` SMTP port (default: `465`)
- `SMTP_USER` SMTP account username
- `SMTP_PASS` SMTP account app password

If `SMTP_PASS` is not provided, messages are still stored locally and email forwarding is disabled.

## Running the Application

Run frontend and backend together:

```bash
npm run dev:full
```

Run backend only:

```bash
npm run server
```

Run frontend only:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` Start Vite development server
- `npm run dev:client` Start frontend development server
- `npm run server` Start backend API server
- `npm run dev:full` Start frontend and backend concurrently
- `npm run build` Build production frontend bundle
- `npm run preview` Preview production build locally
- `npm run lint` Run ESLint checks

## API Endpoints

- `GET /api/health` Health check endpoint
- `POST /api/contact` Accepts contact form payload and stores message

## Contact Message Handling

Each contact submission is:

- Validated on the server
- Stored in `server/data/contact-messages.json`
- Forwarded by email when SMTP is configured correctly

## License

This project is intended for personal professional portfolio use.
