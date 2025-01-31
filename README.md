# react-blog

## Overview
This project is currently under construction. It is being developed as a modern React application with TypeScript and Vite, which will feature blog and portfolio functionality. It utilizes Chakra UI for styling, React Query for data management, and includes comprehensive testing and development tools.

## Tech Stack
- React 18
- TypeScript
- Vite
- Chakra UI
- React Query
- React Router DOM
- MSW (Mock Service Worker)
- Storybook
- Vitest & Playwright for testing
- ESLint & StyleLint for code quality
- Prettier for code formatting

## Prerequisites
- Node.js
- Yarn (v4.0.2 or higher)

## Installation
```bash
git clone https://github.com/kazuya-tanimoto/react-blog.git
cd react-blog
yarn install
```

## Available Scripts

### Development
- `yarn dev`: Start Vite development server
- `yarn build`: Build for production
- `yarn preview`: Preview production build

### Testing
- `yarn test`: Run Vitest tests
- `yarn test:run`: Run tests once
- `yarn test:coverage`: Run tests with coverage
- `yarn test:ui`: Run tests with UI
- `yarn sb:test`: Run Storybook tests
- `yarn sb:test:watch`: Run Storybook tests in watch mode

### Storybook
- `yarn sb`: Start Storybook development server
- `yarn sb:build`: Build Storybook
- `yarn chromatic`: Deploy to Chromatic

### Code Quality
- `yarn lint`: Run all linters
- `yarn lint:es`: Run ESLint
- `yarn lint:style`: Run StyleLint
- `yarn pretty`: Format code with Prettier
- `yarn fix`: Run all formatters and fixers

## Project Structure
```
src/
├── assets/       # Static assets
├── components/   # Reusable UI components
├── config/       # Configuration files
├── features/     # Feature-based modules
├── hooks/        # Custom React hooks
├── lib/          # Third-party library configurations
├── providers/    # React context providers
├── routes/       # Route definitions
├── schemas/      # Data schemas
├── stores/       # State management
├── stories/      # Storybook stories
├── types/        # TypeScript type definitions
└── utils/        # Utility functions
```

## Development Features
- **Type Safety**: Full TypeScript support with type checking
- **Component Development**: Storybook integration with various addons
- **Testing**: 
  - Unit testing with Vitest
  - E2E testing with Playwright
  - Component testing with React Testing Library
  - Storybook testing
- **API Mocking**: MSW for API mocking in development and testing
- **Code Quality**:
  - ESLint with TypeScript support
  - StyleLint for CSS-in-JS
  - Prettier for consistent formatting
  - Pre-commit hooks with simple-git-hooks
  - Lint-staged for incremental checks

## Git Hooks
The project uses simple-git-hooks for pre-commit checks:
- Automatic code formatting
- ESLint checking
- StyleLint checking

## Author
- Name: Kazuya Tanimoto
- GitHub: [kazuya-tanimoto](https://github.com/kazuya-tanimoto)

## License
This project is licensed under the MIT License.