# Fintech Dashboard

A responsive financial portfolio dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- Portfolio visualization with donut chart
- Historical performance tracking
- Positions table with detailed view
- Responsive design
- Theme support via Tailwind
- Protected routes with authentication

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Jest & React Testing Library for testing

## Prerequisites

- Node.js 16.8 or later
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fintech-dashboard.git
cd fintech-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

Run the test suite:
```bash
npm test
```

## Login Credentials

Use the following demo credentials:
- Username: demo
- Password: demo

## API Documentation

The application uses the following endpoints:

- GET /assets - Fetch all available assets
- GET /prices - Fetch asset prices with optional date filtering
- GET /portfolios - Fetch user portfolio data

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
