# Financial Portfolio Dashboard

A modern, responsive financial portfolio dashboard built with Next.js 14, featuring real-time portfolio visualization, theme support, and a clean, professional UI.

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

## Getting Started

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
├── app/                  # Next.js app router pages
├── components/
│   ├── ui/              # Base UI components
│   ├── layouts/         # Layout components
│   └── skeletons/       # Loading states
├── lib/                 # Utilities and helpers
└── types/               # TypeScript definitions
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

## Demo Credentials
```
Username: demo
Password: demo
```

## License

MIT License - feel free to use this project as a template for your own dashboard!
