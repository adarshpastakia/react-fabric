# React-Fabric Agent Instructions

## Project Overview

React-Fabric is a React-based UI component library (RUF - React UI Framework) for building business applications. It uses React 19, Tailwind CSS 4, Storybook 10, and a monorepo structure with npm workspaces.

## Project Structure

```
packages/          # All library packages (core, form, data, date, media, etc.)
  <package>/       # e.g., core, form, data
    src/           # Source files (index.ts exports package constants)
    css/           # Component styles (Tailwind CSS)
    stories/       # Storybook stories
    tests/         # Jest tests
    package.json   # Package config with build scripts
.storybook/        # Storybook configuration
  wrappers/        # Story wrappers (Container, Story, Context, etc.)
  styles/          # Global styles (Tailwind, overrides, Prism themes)
  i18n/            # Internationalization files (en.json, ar.json)
  preview.tsx      # Storybook preview config
  theme.ts         # Light/dark theme definitions
jest/              # Jest test utilities (TestWrapper, setup, blank modules)
stories/           # Introductory Storybook MDX files
```

## Build Commands

- `npm run storybook` — Start Storybook (port 6003) — DO NOT run in chat
- `npm run build` — Build all packages (via Storybook build to ./build)
- `npm run watch` — Watch mode for all packages
- `npm run lint` — Run linting (stylelint + eslint + tsc check)
- `npm run test` — Run Jest tests on all packages
- `npm run release prerelease` — Create a prerelease (always beta for now)

## Package Architecture

### Package Naming

Internal packages use `@react-fabric/<package>` in component source code.
Storybook internal access uses `@/<package>/src`.

### Packages

| Package                   | Purpose                                                                           |
| ------------------------- | --------------------------------------------------------------------------------- |
| `@react-fabric/core`      | Core components (buttons, modals, tooltips, etc.)                                 |
| `@react-fabric/form`      | @tanstack/react-form wrapper with inputs (Form, Field, Input, Select, ArrayField) |
| `@react-fabric/data`      | Data display (DataTable, TreePanel, Pagination, Virtual lists)                    |
| `@react-fabric/date`      | Date calendar panels for input/display                                            |
| `@react-fabric/superdate` | Kibana-style date selector (relative/absolute dates like `$now-2y`)               |
| `@react-fabric/media`     | Image, Video, Audio viewing components                                            |
| `@react-fabric/searchbar` | Kibana-style searchbar with applied filters                                       |
| `@react-fabric/charts`    | ECharts wrappers                                                                  |
| `@react-fabric/map`       | ArcGIS map visualization wrappers                                                 |
| `@react-fabric/graph`     | react-force-graph wrappers                                                        |
| `@react-fabric/monaco`    | Monaco editor wrapper                                                             |
| `@react-fabric/lexical`   | Lexical rich text editor wrapper                                                  |
| `@react-fabric/markdown`  | @tanstack/markdown editor and renderer                                            |
| `@react-fabric/draw`      | Excalidraw drawing canvas                                                         |
| `@react-fabric/utilities` | Shared utility functions                                                          |

### Component Pattern

Each package exports package metadata from `src/index.ts` (e.g., `CORE_PACKAGE`, `CORE_VERSION`).
Components use `ApplicationProvider` wrapper from `@react-fabric/core` for theming.

## Styling

- Uses **Tailwind CSS v4** with PostCSS and Vite plugins
- Global styles in `.storybook/styles/styles.css`
- Component styles per package in `packages/<package>/css/`
- Color system: primary/secondary colors with tints (silver, steel, olive, blush, sand, slate)
- Themes: denim:jade, iris:coral, avocado:wood, pumpkin:lilac, scarlet:marigold
- Rounding: sm, normal, md, full
- Dark/light mode support via `data-color-scheme` on `<html>`

## Internationalization

- Uses **i18next** with **react-i18next**
- Languages: English (en), Arabic (ar)
- i18n config in `.storybook/i18n/index.ts`
- Uses `I18nextProvider` and `ApplicationProvider` in Storybook wrapper
- Key separator: `.`

## Testing

- **Jest** with jsdom environment
- Test files: `packages/<package>/tests/*.test.tsx`
- Test wrapper: `jest/TestWrapper.tsx` (provides i18n + ApplicationProvider)
- MSW for API mocking in Storybook
- Vitest/Playwright for Storybook E2E tests

## Conventions

### File Structure

- Source: `packages/<package>/src/`
- Styles: `packages/<package>/css/`
- Stories: `packages/<package>/stories/`
- Tests: `packages/<package>/tests/`
- Build output: `packages/<package>/dist/` (cjs, esm, types)

### Import Patterns

```tsx
// Within component source code - use package name
import { ApplicationProvider } from "@react-fabric/core";
import { useForm } from "@react-fabric/form";

// In Storybook - use path alias
import { Collapsable } from "@/core/src";
```

### Conventional Commits

Supported types: `feat`, `fix`, `perf`, `refactor`, `style`, `test`, `build`, `ops`, `docs`, `chore`, `merge`, `revert`, `i18n`, `WIP`
Release tags: `v<major>.<minor>.<patch>` with `beta` preid.

### ESLint Rules

- React hooks enforcement enabled
- Unused vars: `args: "after-used"`, vars starting with `_` ignored
- Namespaces disabled (`@typescript-eslint/no-namespace: "off"`)
- Type-checked linting enabled

### Build System

- **Rollup** for bundling (cjs + esm with preserveModules)
- **TypeScript** for type generation
- Babel with `@babel/plugin-transform-runtime` for runtime helpers
- Externalizes peer deps, react, react-dom, style-inject, @babel/runtime, @arcgis/_, @lexical/_, prismjs, elkjs, and `.module.css` files

## Key Files

- `.storybook/preview.tsx` — Storybook preview with theme globals
- `.storybook/wrappers/Story.tsx` — Main story wrapper (i18n + theme + context)
- `.storybook/theme.ts` — Light/dark theme definitions
- `jest/TestWrapper.tsx` — Jest test wrapper with providers
- `jest/setup.ts` — Jest setup file
- `vite.config.ts` — Vite config with Tailwind + Storybook Vitest plugin
- `rollup.config.mjs` — Rollup build config for packages
- `git-conventional-commits.json` — Conventional commit configuration

## Skills

Use the following skills from `.github/skills/` when the relevant task arises:

### Comment Generation (`comment-generation`)

- **Trigger**: When asked to add comments, generate docs, document a function, write JSDoc, or comment a component/hook/function
- Use JSDoc format for React components, hooks, and helper functions
- For React components: short description, no `@param` for props (Props interface is self-documenting)
- For Props interfaces: describe each property, no `@type` or `@default` tags
- For complex functions: inline `//` comments explaining the "why"

### Story Generation (`story-generation`)

- **Trigger**: When asked to generate stories, create Storybook stories, add stories for a component, or write stories
- Follow the 3-step workflow: analyze component → interactive confirmation with user → generate stories
- Each component gets a basic story (`_ComponentName`), a `Tester` story, and MDX documentation
- For components with subcomponents: create separate story files per subcomponent with MDX to combine them

### Test Generation (`test-generation`)

- **Trigger**: When asked to write tests, generate tests, add tests for a component, or create a test suite
- Always check for a `Tester` story first — use it as the basis for tests
- If no Tester story exists, use the **story-generation** skill first
- Follow the 3-step workflow: analyze → interactive confirmation with user → generate tests
- Use `TestWrapper` from `jest/TestWrapper.tsx` for consistent provider context
- Follow AAA pattern: Arrange, Act, Assert

## Pitfalls

1. **Never start Storybook in chat** — it runs indefinitely and blocks the port
2. Always use `@react-fabric/<package>` for internal package imports in component code
3. Use `@/<package>/src` only for Storybook internal access
4. CSS files use Tailwind v4 syntax (different from v3)
5. React 19 uses `react-jsx` transform, not `react`
6. Tests run in jsdom, not browser environment
7. The `dist/` directories are generated — never commit them
