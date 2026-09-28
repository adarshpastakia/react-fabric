# Contributing & development workflow

This is the human-facing loop for adding or changing a React-Fabric component. It is the
"what to do, in what order" companion to [`CLAUDE.md`](./CLAUDE.md), which holds the deep
architecture, build-system, and testing internals. Read this for the flow; read `CLAUDE.md`
when you need the _why_ or a detail.

> Working with Claude? Each stage maps to a skill under `.agents/skills/` (`fabric-component`,
> `fabric-test`, `typescript-docs`, `typescript-react-reviewer`, and the optional `grill-me`
> design interview). The skills encode the steps below; the loop is also fully doable by hand.

## Prerequisites

- Node ≥ 24, npm ≥ 11.
- This is an npm-workspaces + Turborepo monorepo. Each `packages/*` is an independently
  published `@react-fabric/*` package, built to CJS + ESM.

## The component lifecycle

Run this per component, top to bottom.

1. **Design** _(optional — only for non-trivial or ambiguous components)_. Pressure-test the
   design before writing code. Skill: `grill-me`.
2. **Author the component** — `packages/<pkg>/src/...`:
   - Full MIT license header at the top (copy it verbatim from a sibling file — don't hand-type).
   - Import from **published names**: `@react-fabric/core`, `@react-fabric/utilities`, …
   - React 19 `react-jsx` transform — **do not `import React`**.
   - A `XxxProps` interface with a JSDoc block on **every** property; no `@type`/`@default`
     tags (the TS annotation is the source of truth).
   - JSDoc on the component with an `@example`.
   - Data-attribute-driven styling (`data-variant` / `data-color` / `data-size`, …) driven by
     Tailwind **v4** `is-*` / `data-*` variants and `--fabric-*` custom properties in the
     package `css/` files; merge class strings with `cn` (from `@react-fabric/utilities`).
   - Polymorphic `as` / `PolymorphicProps` where the element renders as different tags.
   - i18next keys for any user-facing text.
   - Export from the package barrel `src/index.ts`.
   - Skill: `fabric-component`; docs shapes via `typescript-docs`.
3. **Write the `Tester` story** — `packages/<pkg>/stories/<group>/Name.stories.tsx`. Every
   component story file exports an "empty" `Tester` story whose `render` is just
   `<Component {...args} />` with `tags: ["!autodocs"]`. Its `meta.parameters.jest` array points
   at the test file (the story↔test bridge). Showcase stories (variants, sizes, colors) live in
   the same file.
4. **Write the test** — `packages/<pkg>/tests/<group>/Name.test.tsx`, Tester-story-first:
   import the component from `../src`, render it in jsdom via Testing Library, assert with
   `getByRole` / `getByText`. Skill: `fabric-test`.
5. **Review** the change before declaring it done. Skill: `typescript-react-reviewer`.
6. **Verify** — iterate with `npx jest`, then gate with lint + a package build:

   ```bash
   npx jest packages/<pkg>/tests          # behavior tests, fast (skips the lint gate)
   npm run lint                           # eslint (type-checked) + stylelint + tsc build:dts
   cd packages/<pkg> && npm run build      # rollup + dts for just this package
   ```

7. **Commit** with a conventional-commit type; the git gates do the rest (see below).
8. **Release** on cadence, not per commit: `npm run release prerelease` (preid `beta`).

## Command cheatsheet

```bash
# iterate fast (no lint/coverage gate)
npx jest packages/<pkg>/tests/Name.test.tsx
npx jest packages/<pkg>/tests/Name.test.tsx -t "renders its label"   # one test by name

# finish the work (gates on, coverage collected → qlty)
npm run test            # pretest (lint + tailwind build) → jest with coverage, all packages
npm run lint            # eslint + stylelint + tsc build:dts

# build
cd packages/<pkg> && npm run build   # one package; or `npm run dist` for all, `npm run watch`
npm run build                             # storybook build → ./build

# preview in the browser (human step; the user runs this, not the agent)
npm run storybook       # dev server on port 6003
```

Use `npx jest` while iterating — it bypasses the `pretest` lint + Tailwind build gate. Run
`npm run test` (or let `pre-push` run it) before finishing so coverage is collected.

## Guards — the things that cause the most rework

- **Never start Storybook in an agent session** — it blocks the port. It is a human/browser step.
- **`@/<pkg>/src` is for story files only.** Component source and tests use the published name
  (`@react-fabric/<pkg>`, or `../src` in tests). It will fail the build/lint anywhere else.
- **Tailwind v4** — CSS-first (`@import "tailwindcss"`, `@theme`). No v3 `@apply`-first or
  `tailwind.config`-first assumptions.
- **React 19 `react-jsx`** — no `import React`.
- **JSDoc is mandatory** on the component and on every prop; the MIT license header on every file.
- **Barrels carry `istanbul ignore file`** — coverage is collected from `src` component code, not
  from `index.ts`.
- `dist/` and `.turbo/` are generated — never commit them.

## Git gates (husky)

- `commit-msg` — enforces the Conventional Commits convention (`git-conventional-commits.json`):
  `feat | fix | perf | refactor | style | test | build | ops | docs | chore | merge | revert | i18n | WIP`.
- `pre-commit` — runs Prettier + `npm run lint`.
- `pre-push` — runs the full `npm test` suite.

## Where to go deeper

- [`CLAUDE.md`](./CLAUDE.md) — architecture, monorepo layout, build system, testing split
  (Jest/jsdom now; Playwright visual/E2E deferred), i18n.
- `.agents/skills/` — the per-step skills that encode this loop when working with Claude.
