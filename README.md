# Marketing Landing Page

> A mini project for the Hungry Hub frontend assignment.

## Tech Stack

- React
- TypeScript
- NextJS
- Tailwind
- Lucide React
- n8n
- React Testing Library
- Jest
- Eslint
- Prettier
- Google Sheet

## How to play

### Prerequisites

Make sure you have installed:

- git v2.47.1
- node v22.14.0
- yarn v4.10.3 (you can use npm too with v11.5.1)

### Setup

```bash
# Clone the repository
git clone git@github.com:tikusdugem/hungryhub-fe-task.git

# Move into the project directory
cd hungryhub-fe-task

# Create .env file
cp .env.example .env

# Update the values of .env file
# Ask the developer or
PRODUCTS_API_URL=https://free-food-menus-api-two.vercel.app/best-foods
N8N_WEBHOOK_URL=https://tikusdugem.app.n8n.cloud/webhook/notify-me

# Install dependencies
yarn

# Play it!
yarn dev

# Test it!
yarn test
yarn test:coverage
```

## Notes

### 1. Food API Reference

https://github.com/sachabigou/free-food-menus-api

### 2. How to make sure n8n automations works

- Just put some email or random string in the input email field and then click the button `Notif Me!`
- Open this [Google Sheet](https://docs.google.com/spreadsheets/d/1zAqLyrYSUAYG6MMIqDZQ55GDRaFKGP7hG3ACBPPKvEk/edit?usp=sharing) to make sure your email showing.
