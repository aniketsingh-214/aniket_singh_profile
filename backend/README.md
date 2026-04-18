# Aniket Singh Portfolio — Backend API

Express.js + Nodemailer backend for the contact form.

## Features
- **Contact email to admin** — rich dark-themed HTML email sent to `infoaniketsinghprofile@gmail.com`
- **User acknowledgement email** — light purple-themed "thank you" email sent back to the form submitter
- CORS-protected, JSON validated, rate-safe

## Setup

### 1. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in:

| Variable | Description |
|---|---|
| `PORT` | Backend port (default `5000`) |
| `FRONTEND_ORIGIN` | Vite dev server URL (default `http://localhost:5173`) |
| `EMAIL_USER` | Gmail address to send FROM |
| `EMAIL_PASS` | **Gmail App Password** (NOT your login password) |
| `CONTACT_RECEIVER_EMAIL` | Inbox that receives contact notifications |
| `SENDER_NAME` | Display name shown in emails |

> **How to get a Gmail App Password:**
> 1. Enable 2-Step Verification at https://myaccount.google.com/security
> 2. Go to https://myaccount.google.com/apppasswords
> 3. Select "Mail" → "Other" → name it "Portfolio Backend"
> 4. Copy the 16-character password into `EMAIL_PASS`

### 2. Install & run

```bash
npm install
npm run dev      # development (nodemon)
# or
npm start        # production
```

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Submit contact form |

### POST `/api/contact` payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hi Aniket, I'd love to work with you!"
}
```

## Project Structure

```
backend/
├── config/
│   └── mailer.js                  # Nodemailer transporter
├── controllers/
│   └── contactController.js       # Form handler logic
├── routes/
│   └── contactRoutes.js           # API routes
├── templates/
│   ├── adminNotificationTemplate.js   # Email to admin
│   └── userAcknowledgeTemplate.js     # Email to user
├── .env                           # Secret config (git-ignored)
├── .env.example                   # Template for required vars
├── server.js                      # Entry point
└── package.json
```
