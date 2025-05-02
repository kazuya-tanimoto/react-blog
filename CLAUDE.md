# React Blog Project Cheatsheet

## Build & Test Commands
- `yarn dev`: Start dev server
- `yarn build`: Build for production
- `yarn test`: Run all tests in watch mode
- `yarn test:run`: Run all tests once
- `yarn test:coverage`: Generate coverage report
- `yarn test <TestName>`: Run specific test
- `yarn test:ui`: Run tests with UI
- `yarn check`: Run Biome linting
- `yarn check:ts`: TypeScript type checking
- `yarn fix`: Auto-fix linting issues
- `yarn sb`: Start Storybook

## Code Style Guidelines
- Use TypeScript with strict type checking
- Imports organized by Biome (external, internal, then types)
- 2-space indentation, 100 char line width
- Component structure: atoms → molecules → organisms → templates
- React components use named exports and JSX.Element return type
- Tests use React Testing Library with specific assertions
- Use Chakra UI for styling with responsive design (base/sm/md/lg/xl)
- Feature folders contain types/, components/, and data/
- Error handling with react-error-boundary
- Prefer async/await over promise chains
- Use path aliases (@/*) for imports