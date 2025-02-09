# Fintech Dashboard

A modern, responsive financial portfolio dashboard built with Next.js, TypeScript, and Recharts.

## Features

- Portfolio visualization with donut and line charts
- Asset allocation breakdown
- Positions table with detailed view
- Dark/Light theme support
- Responsive design
- Mock API integration

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Recharts
- Shadcn/UI

## Getting Started

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
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing

Run the test suite:
```bash
npm test
```

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## Login Credentials

Use the following credentials to log in:
- Username: demo
- Password: demo

## Architecture

The application follows a modular architecture with:
- Components: Reusable UI components
- Hooks: Custom React hooks for shared logic
- Types: TypeScript interfaces and types
- Utils: Helper functions and utilities
- API: Mock API implementation

## Error Handling

The application includes multiple layers of error handling:
- Global Error Boundary for uncaught errors
- API call error handling with user feedback
- Form validation with error messages
- Loading states with skeletons

## Theming

The application supports light and dark themes with:
- System preference detection
- Manual theme toggle
- Persistent theme selection
- Smooth transitions

## Performance

- Code splitting with Next.js
- Optimized images and assets
- Minimized bundle size
- Efficient re-renders

## Security

- Protected routes with middleware
- Form validation
- Secure cookie handling
- XSS protection
