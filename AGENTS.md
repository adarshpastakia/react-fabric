# AGENTS.md

Agent instructions for the **react-fabric** repository. This is the single,
agent-agnostic source of truth for working in this codebase. Human contributors:
see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the per-component workflow and
[`README.md`](./README.md) for the public overview.

## Project

**React-Fabric** is a React 19 UI component library for business applications. It is an
npm-workspaces monorepo: each `packages/*` is an independently published `@react-fabric/*`
package built to CJS + ESM. Styling is Tailwind CSS v4; docs live in Storybook 10; unit tests
are Jest + Testing Library, used for both utility/unit tests and component behavior tests — all in jsdom,
so coverage is collected (Istanbul) and uploaded to qlty. Visual/E2E tests run on the Storybook Vitest
addon (Playwright) and are planned for later.
Localization uses i18next.

Requires Node ≥ 24 / npm ≥ 11.

## Common commands

```bash
npm run lint            # stylelint (css) + eslint (ts, type-checked) + tsc build:dts check
npm run test            # pretest (lint + tailwind build) → jest with coverage, all packages
npm run jest            # jest only, no lint/coverage gate
npm run build           # storybook build → ./build
npm run dist            # turbo: build every package (rollup + dts) in dependency order
npm run watch           # turbo watch across all packages
```

- **Run a single test file:** `npx jest packages/graph/tests/graph.test.ts`
- **Run one test by name:** `npx jest packages/graph/tests/graph.test.ts -t "setGraph replaces"`
- **Build one package:** `cd packages/<pkg> && npm run build` (or `npm run build:dts` / `build:rollup`)
- `npx jest` skips the `pretest` lint gate, which is the fast path while iterating.

> **Do not run `npm run storybook` in the agent session** — it starts a dev server on port 6003
> that blocks indefinitely. It is for the user's browser.

The `prebuild` script runs jest with `--json` into `.storybook/jest-test-results.json`, which
Storybook surfaces against each story's `jest:` parameter (see testing below).

## Architecture

### Monorepo layout

Each package under `packages/<name>/` follows a fixed shape:

```
src/index.ts      # barrel; also exports `<PKG>_PACKAGE` and `<PKG>_VERSION` constants
src/…             # component source (React), hooks/, utils/, types/
css/              # per-package Tailwind CSS (imported by consumers)
stories/          # Storybook *.stories.tsx / *.mdx
tests/            # Jest *.test.tsx / *.test.ts
tsconfig.json + tsconfig.build.json   # build emits dist/{cjs,esm,types}
package.json      # source:"src/index.ts", main/module/types → dist/*
```

Packages are dependency-ordered by Turbo (`dependsOn: ["^build"]`). `utilities` and `core` are
foundational (everyone depends on them); `form`/`data`/`date`/`media`/etc. build on `core`.

**Inter-package imports use the published name:** `import { ApplicationProvider } from "@react-fabric/core"`.
These resolve through the workspace, not through `dist`.

### Import alias — story files ONLY

`@/<pkg>/src` (mapped to `./packages/<pkg>/src` in `tsconfig.json` paths and the Vite/Storybook
config) is used **only inside Storybook story files** (`*.stories.tsx`). This lets a story import
a component from source so edits render live without a rebuild. Component source and tests use the
`@react-fabric/<pkg>` name (tests import from `../src`, e.g. `import { Graph } from "../src"`).
Never put `@/…/src` into component source.

### Component pattern

- Components are typed React function components (React 19, `react-jsx` transform — no `import React`).
- The polymorphic `as`/`PolymorphicProps` pattern is used for elements that render as different tags
  (e.g. `Button as="a"`).
- Props interfaces document each property with a JSDoc block. Components use `ApplicationProvider`
  from `@react-fabric/core` for theming context; class-name merges come from `cn` in
  `@react-fabric/utilities`.
- Styling is data-attribute driven (`data-variant`, `data-color`, `data-size`, …) with Tailwind
  `is-*`/`data-*` variants in `css/`, rather than inline class strings.

### Build system

Rollup (root `rollup.config.mjs`) bundles each package to `dist/cjs` and `dist/esm` with
`preserveModules: true`; types are emitted separately by `tsc -p tsconfig.build.json` (`build:dts`).
Rollup externalizes `react`, `react-dom`, peer deps, and a fixed list (`@arcgis/*`, `@lexical/*`,
`prismjs`, `elkjs`, `*.module.css`, `@babel/runtime`). Babel transform uses `babelHelpers: runtime`
with `../../.babelrc.json`. `dist/` is generated — never commit it.

### Testing

Two runners, split by what they cover:

- **Jest** (jsdom; `ts-jest` + `tsconfig.test.json`; setup via `jest/TestWrapper.tsx`, which wraps in
  i18n + `ApplicationProvider`; CSS/SVG/media stubbed via `moduleNameMapper`) is for **all current tests** —
  both non-component unit tests (pure logic like `packages/utilities` and the `Graph` class in
  `packages/graph`) and **component behavior tests** rendered in jsdom via Testing Library. Component tests
  run here (not in Playwright) so coverage collects as Istanbul and uploads to qlty. Run with `npx jest <path>`.
- **Playwright** drives **visual / E2E tests (planned, not yet used)** via the Storybook Vitest addon
  (`@storybook/addon-vitest` + `@vitest/browser-playwright`, wired in `vite.config.ts` under
  `test.projects` → `storybook`), running in a real browser rather than jsdom. Deferred for now: component
  behavior tests live in Jest/jsdom (above) so qlty can collect coverage.
- **The `Tester` story convention** bridges stories to tests: every component story file must export
  an "empty" story named `Tester` (see `TesterCircle` in `ProgressCircle.stories.tsx`) whose `render`
  is just `<Component {...args} />` with `tags: ["!autodocs"]`. Component tests load _that_ story and
  feed props in as `args`; the story's `meta.parameters.jest` array links the story to its test file.
  When writing or fixing a component test, base it on the component's `Tester` story; if it's missing,
  create it first.
- Tests live in `packages/<pkg>/tests/*.test.tsx`. Coverage is collected from `src` only
  (`istanbul ignore file` on barrels/index files, as seen in `src/index.ts`).

### i18n

i18next + react-i18next. Config in `.storybook/i18n/` (en, ar); key separator `.`. Components use
`I18nextProvider`/`ApplicationProvider` in the Storybook wrapper chain (`.storybook/wrappers/Story.tsx`),
which also wires theme globals (`denim:jade` primary:secondary, tints, `scheme`/`round` data attrs).

## Conventions

- **JSDoc is mandatory** on components and on every prop/interface property — short description plus
  `@example` for complex components. No `@type`/`@default` tags; the type annotation is the source of
  truth. Use the `typescript-docs` skill (see below) for the exact shapes.
- **Conventional Commits** (`git-conventional-commits.json`): types `feat|fix|perf|refactor|style|
test|build|ops|docs|chore|merge|revert|i18n|WIP`. Husky gates the workflow: `commit-msg` enforces the
  convention (`.husky/scripts/commit-msg.js`), `pre-commit` runs prettier + `npm run lint`, and
  `pre-push` runs the full `npm test` suite.
- Each source file carries the MIT license header block at the top (copy from an existing file).
- Releases: `npm run release prerelease` (preid `beta`).

## Skills

Skills live in `.agents/skills/` (each is a `SKILL.md` with a `name` + `description` front matter
that an agent matches against the task). There are two groups:

**House skills** — project-specific, maintained here (not in `skills-lock.json`):

- **`fabric-component`** — author or modify a `@react-fabric/*` component: React 19 function
  component (no `import React`), MIT license header, JSDoc on the component and every prop with
  `@example`, data-attribute-driven Tailwind v4 styling in `css/`, published-name imports, `cn` for
  class merges, the polymorphic `as`/`PolymorphicProps` pattern, and a matching `Tester` story wired
  with `meta.parameters.jest`. **Use this first for any new component / form control / styling task.**
- **`fabric-test`** — write a Jest + Testing Library behavior test Tester-story-first: the component
  must have a `Tester` story whose `meta.parameters.jest` links it to the test file; the test renders
  the component in jsdom and asserts on it. **Use this after `fabric-component`, for any test.**

**Third-party skills** — installed from [skills.sh](https://skills.sh) into `.agents/skills/` and
pinned by hash in `skills-lock.json` (re-synced from upstream; do not edit in place, or the hash
breaks and the next sync reverts your change):

- **`typescript-docs`** — JSDoc/docs generation (TypeDoc, ADRs, JSDoc tag shapes). Invoke when
  writing or fixing component/prop docs.
- **`typescript-react-reviewer`** — React 19 code review. Invoke before declaring a component done.
  **Caveat for this repo:** it is app-oriented, so its "barrel files (`index.ts`) → direct imports"
  anti-pattern does **not** apply — this is a _library_ whose `src/index.ts` barrels _are_ the public
  API. Also treat its Zustand / TanStack Query guidance as optional, not house style.
- **`grill-me`** — adversarial plan/design interview. User-invoked only (`disable-model-invocation:
true`); do not auto-invoke.

The project's own workflows — JSDoc for comments, and the `Tester`-story-first flow for stories and
tests — follow an "analyze → confirm with the user → generate" pattern. `CONTRIBUTING.md` is the
human-readable companion that maps each lifecycle stage to the skill above.

## Pitfalls

1. **Never start Storybook in the session** — it blocks the port indefinitely.
2. `@/<pkg>/src` alias is for **story files only**; component source and tests use
   `@react-fabric/<pkg>` (or `../src` in tests).
3. Tailwind is **v4** — CSS syntax differs from v3 (`@import "tailwindcss"`, `@theme`, CSS-first).
4. React 19 `react-jsx` transform — do not `import React`.
5. **All current tests run in jsdom** (Jest + Testing Library) — including component behavior tests, so coverage collects as Istanbul for qlty. Visual/E2E tests in **Playwright** are deferred.
6. `dist/` and `.turbo/` are generated — never commit.
7. The `pretest` gate runs lint + a Tailwind build before jest; use `npx jest` to bypass it while iterating.
