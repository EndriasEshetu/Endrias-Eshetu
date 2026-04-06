# Endrias Eshetu Portfolio

Responsive portfolio site built with React, TypeScript, Vite, and Express.

## What It Does

- Presents professional skills and technical experience
- Showcases selected projects and work samples
- Lists achievements and certificates
- Provides a contact form backed by an API
- Stores submissions locally and sends email notifications when configured

## Setup

```bash
npm install
```

Create a `.env` file from `.env.example` and set the required values:

- `PORT`
- `FRONTEND_ORIGIN`
- `VITE_API_BASE_URL`
- `CONTACT_RECEIVER_EMAIL`
- `RESEND_API_KEY`

## Run

```bash
npm run dev
```

Starts the frontend and backend together.

```bash
npm run dev:client
```

Starts the frontend only.

```bash
npm run server
```

Starts the backend only.

## Scripts

- `npm run dev` Start frontend and backend together
- `npm run dev:client` Start the frontend only
- `npm run server` Start the backend only
- `npm run build` Build the frontend
- `npm run preview` Preview the production build
- `npm run lint` Run ESLint

## API

- `GET /api/health` Health check
- `POST /api/contact` Submit contact form data

## Deployment

Backend:

- Start command: `npm run server`
- Health check: `/api/health`
- Set `FRONTEND_ORIGIN`, `CONTACT_RECEIVER_EMAIL`, and `RESEND_API_KEY`

Frontend:

- Set `VITE_API_BASE_URL` to the backend URL

## Notes

- Contact messages are stored locally in `server/data/contact-messages.json`.
- Email delivery uses Resend when `RESEND_API_KEY` is set.
