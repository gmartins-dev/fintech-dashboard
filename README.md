# My Wallet - Financial Dashboard

A modern, responsive financial portfolio dashboard built with Next.js 14, featuring real-time portfolio visualization, theme support, and a clean, professional UI.

## Live Demo

[https://fintech-dashboard-umber.vercel.app/](https://fintech-dashboard-umber.vercel.app/)

Demo Credentials
```
Username: demo
Password: demo
```

## Key Features

- 📊 Interactive Charts
  - Portfolio allocation donut chart with asset/type toggle
  - Historical performance line chart with time range selection
  - Responsive and theme-aware visualizations
  - Real-time data updates

- 💼 Portfolio Management
  - Detailed positions table
  - Asset breakdown by type
  - Currency-formatted values
  - Comprehensive portfolio overview

- 🎨 Modern UI/UX
  - Light/Dark theme with system detection
  - Smooth transitions and animations
  - Responsive design for all devices
  - Loading states with skeletons
  - Custom tooltips and interactions

- 🔒 Security & Authentication
  - Protected routes with middleware
  - Session management
  - Secure cookie handling
  - Mock authentication system

## Tech Stack

- **Framework**: Next.js 14 (using App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Components**:
  - Shadcn/UI for base components
  - Recharts for data visualization
  - Custom themed components
- **Authentication**: Localstorage using custom middleware with cookies
- **State Management**: React hooks and context
- **Development**:
  - ESLint for code quality
  - Jest for testing
  - Prettier for code formatting

## Getting Started (Local Setup)

1. Clone and install:
```bash
git clone https://github.com/yourusername/fintech-dashboard.git
cd fintech-dashboard
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   └── layout.tsx         # Root layout
├── components/
│   ├── charts/            # Chart components
│   ├── dashboard/         # Dashboard specific components
│   ├── ui/                # Base UI components
│   └── skeletons/         # Loading states
├── lib/
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # Global constants
├── styles/                # Global styles
├── types/                 # TypeScript definitions
└── test/                  # Test utilities
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build production bundle
npm run start        # Run production server
npm run lint         # Run ESLint

# Testing
npm test                  # Run all tests
npm run test:watch        # Watch mode
npm run test:unit         # Unit tests only
npm run test:integration  # Integration tests only
npm run test:e2e          # E2E tests
```

## Features in Detail

### Theme System
- System preference detection
- Manual theme toggle
- Persistent theme selection
- CSS variables for consistent styling
- Smooth theme transitions

### Charts
- Interactive data visualization
- Theme-aware colors and styling
- Custom tooltips
- Responsive layouts
- Loading states

### Authentication
- Protected routes
- Session management
- Mock API integration
- Login/Logout functionality

### Performance
- Component-level code splitting
- Optimized bundle size
- Efficient re-renders
- Loading state management

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## Testing

The project implements a comprehensive testing strategy:

### Unit & Integration Tests
- Jest and React Testing Library
- Component testing
- Custom hook testing
- Utils and helpers testing
- Mock service workers for API testing

### E2E Tests
- Playwright for end-to-end testing
- Critical user flows covered
- Cross-browser testing
- Mobile responsive testing

### Running Tests

```bash
# Run all tests
npm test

# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e

# Run tests in watch mode
npm run test:watch
```


## License

MIT License - feel free to use this project as a template or inspiration for your own dashboard!
