# Repository Guidelines

## Project Structure & Module Organization
- `src/app` hosts Next.js route segments and server components; follow the existing segment folders when adding pages.
- Reusable UI and hooks sit in `src/components` and `src/hooks`; keep styles inline with Tailwind utilities.
- Genkit workflows live in `src/ai`; shared data and helpers are in `src/lib`; update `components.json` if you scaffold new shadcn/ui primitives.
- Static assets belong in `public`, while long-form references or briefs can go in `docs/`.

## Build, Test, and Development Commands
- `npm run dev` starts the Turbopack dev server on port 9002.
- `npm run build` compiles a production bundle; run before deploying.
- `npm run start` serves the built app locally for smoke tests.
- `npm run lint` enforces the Next.js ESLint rules; resolve all warnings.
- `npm run typecheck` runs the strict TypeScript configuration.
- `npm run genkit:dev` or `npm run genkit:watch` boots the Genkit flows defined in `src/ai/dev.ts`.

## Coding Style & Naming Conventions
- Write TypeScript functional components with 2-space indentation and single quotes, mirroring `src/app/page.tsx`.
- Import shared modules through the `@/` alias; keep components in PascalCase, hooks as `useThing`, and utility modules in `camelCase`.
- Use Tailwind for styling and group utilities logically (layout → spacing → color → state).
- Run `npm run lint` and `npm run typecheck` after large edits to catch drift early.

## Testing Guidelines
- No automated test runner ships yet; rely on `npm run lint`, `npm run typecheck`, and `npm run build` for regression checks.
- When adding tests, co-locate `*.test.ts(x)` files beside the code or under `src/__tests__`, and document the invocation in `package.json`.
- Provide manual test notes in pull requests until an automated suite is in place.

## Commit & Pull Request Guidelines
- Follow the short, imperative summary style seen in history (e.g., `Add contact CTA`); keep the subject under 50 characters and wrap body text at 72.
- Reference related issues, describe risk areas, and attach screenshots for UI changes.
- Verify `lint`, `typecheck`, and `build` locally before requesting review; call out any follow-up tasks.

## AI & Genkit Tips
- Keep Genkit prompts and schemas under `src/ai` and secrets in `.env.local` (never commit credentials).
- Document new flows in `docs/` and link the affected routes in PRs so reviewers can validate the end-to-end experience.
