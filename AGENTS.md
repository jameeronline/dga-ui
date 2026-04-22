# DGA-UI Design System

## Dev Commands

```bash
npm run dev              # Start Vite dev server
npm run build            # Run tsc && vite build
npm run storybook        # Start Storybook on port 6006
npm run build-storybook  # Build static Storybook
npm run lint             # ESLint
npm run lint:fix         # ESLint --fix
npm run format:fix       # Prettier write
```

## Testing

Tests run via Vitest with Storybook integration and Playwright browser:
```bash
npx vitest run           # Run all tests
```

## Path Aliases

TypeScript paths configured in `tsconfig.json`:
- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/stories/*` → `./src/stories/*`

## Code Style

- Prettier: 160 char width, single quotes, trailing commas
- ESLint: TypeScript strict mode, warns on `any` and unused vars

## Project Structure

- Components: `src/stories/components/`
- Types: `src/types/`
- Styles: `src/styles/` (input.css → output.css via Tailwind CLI)
- Storybook config: `.storybook/`

## Notes

- Tailwind 4.x is used but config file uses v3 format (legacy compatibility)
- Tailwind build is separate: `npm run tailwind:build` (watch mode available)
- Storybook uses Vitest addon for component testing with Playwright browser
