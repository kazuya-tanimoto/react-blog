# React Blog Developer Guidelines

## Project Overview
This is a React blog application built with modern web technologies. It uses a component-based architecture with TypeScript for type safety.

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Chakra UI
- **State Management**: React Query for server state
- **Routing**: React Router
- **Testing**: Vitest (unit tests), Playwright (E2E tests), Storybook (component tests)
- **Code Quality**: Biome for linting and formatting, TypeScript for type checking

## Project Structure
```
src/
├── assets/         # Static assets
├── components/     # Reusable UI components
├── config/         # Application configuration
├── features/       # Feature-specific components and logic
├── hooks/          # Custom React hooks
├── lib/            # Library code and wrappers
├── providers/      # React context providers
├── routes/         # Route definitions
├── schemas/        # Data validation schemas
├── stores/         # State management
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Development Workflow

### Getting Started
1. Install dependencies:
   ```
   yarn install
   ```
2. Start the development server:
   ```
   yarn dev
   ```

### Code Quality
- Run type checking:
  ```
  yarn check:ts
  ```
- Run linting and formatting checks:
  ```
  yarn check
  ```
- Fix linting and formatting issues:
  ```
  yarn fix
  ```

### Testing
- Run unit tests:
  ```
  yarn test        # Watch mode
  yarn test:run    # Run once
  yarn test:coverage # With coverage report
  ```
- Run E2E tests:
  ```
  npx playwright test
  ```
- Run Storybook:
  ```
  yarn sb
  ```
- Run Storybook tests:
  ```
  yarn sb:test
  ```

### Building
- Build for production:
  ```
  yarn build
  ```
- Preview the production build:
  ```
  yarn preview
  ```

## Best Practices
1. **Component Organization**: 
   - Use atomic design principles (atoms, molecules, organisms)
   - Keep components small and focused
   - Use Storybook for component documentation

2. **State Management**:
   - Use React Query for server state
   - Use React Context for global UI state
   - Keep component state local when possible

3. **Code Quality**:
   - Write tests for all new features
   - Maintain type safety with TypeScript
   - Follow the linting and formatting rules
   - Use pre-commit hooks for code quality checks

4. **Git Workflow**:
   - Create feature branches from main
   - Submit pull requests for review
   - Ensure CI checks pass before merging
