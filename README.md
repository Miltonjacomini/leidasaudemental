# Blog Tino

A modern personal blog application built with React, TypeScript, and Supabase.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool with SWC for fast compilation
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library built on Radix UI
- **TanStack Query** - Server state management
- **React Router** - Client-side routing
- **Supabase** - Backend as a service (database)
- **React Hook Form** + **Zod** - Form handling and validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd blog-tino-new

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`.

## Available Scripts

| Command           | Description                      |
|-------------------|----------------------------------|
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                       |

## Project Structure

```
src/
├── components/     # Reusable UI components
│   └── ui/         # shadcn/ui primitives
├── contexts/       # React contexts (ThemeContext)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── pages/          # Route-level page components
```

## Features

- Dark/Light theme support with localStorage persistence
- Responsive design
- Blog posts with Supabase backend
- Type-safe development with TypeScript

## Path Aliases

Use `@/` for imports from the `src/` directory:

```typescript
import { Button } from "@/components/ui/button";
```

## License

Private project
