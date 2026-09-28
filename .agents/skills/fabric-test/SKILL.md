---
name: fabric-test
description: "Write Jest + Testing Library behavior tests for a React-Fabric component using the Tester-story-first convention: the component must have a `Tester` story (see the fabric-component skill) whose `meta.parameters.jest` links it to the test file; the test renders the component in jsdom and asserts on it. Use when adding or fixing a component test, or when wiring a story to its test. Triggers: write a test, test a component, Tester story, jest, behavior test, meta.parameters.jest, coverage, component test."
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
---

# Fabric Component Testing

All current tests run in **Jest + Testing Library in jsdom** (not Playwright — visual/E2E in
Playwright is deferred). Behavior tests are run in jsdom precisely so coverage collects as
Istanbul and uploads to qlty.

## Tester-story-first flow

A component test is driven by the component's `Tester` story. Before writing a test:

1. **Confirm a `Tester` story exists** for the component (create it with the `fabric-component`
   skill if missing). It has `tags: ["!autodocs"]` and `render: (args) => <Component {...args} />`.
2. **Confirm the story's `meta.parameters.jest`** points at the test file, e.g.
   `jest: ["<pkg>/tests/name/Name.test.tsx"]`. This is the story↔test bridge — keep it in sync
   when you move or rename the test.
3. **Write the test** in `packages/<pkg>/tests/<group>/Name.test.tsx`, importing the component
   from `../src` (e.g. `import { Name } from "../src"`), and render it in jsdom.

> There are currently no component tests in the repo yet — all existing tests are pure-logic
> (`packages/utilities`, `packages/graph`). The first component test you write establishes the
> exact story-loading pattern; follow the `Tester`-story convention above and the `TestWrapper`
> i18n/`ApplicationProvider` setup, and keep the story's `jest` param and the test path in sync.

## Test skeleton

```tsx
/*
 * <copy the full MIT license header from an existing file in this package>
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Name } from "../src";

describe("Name", () => {
  it("renders its label", () => {
    render(<Name label="Hello" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("responds to interaction", async () => {
    const onClick = jest.fn();
    render(<Name onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

- The component renders inside the `ApplicationProvider` + i18n wrapper (see
  `jest/TestWrapper.tsx`), so theming/i18n context is available — you usually don't add it.
- CSS/SVG/media are stubbed via Jest's `moduleNameMapper` — don't try to assert on raw CSS.
- Keep tests in jsdom; do **not** move behavior tests to Playwright (that runner is deferred for
  visual/E2E only).

## Run

```bash
npx jest packages/<pkg>/tests/Name.test.tsx          # one file (skips the lint gate — fast)
npx jest packages/<pkg>/tests/Name.test.tsx -t "renders its label"   # one test by name
npm run test                                           # full suite with coverage gate
```

Use `npx jest` while iterating (it bypasses the `pretest` lint + Tailwind build gate); run
`npm run test` (or let pre-push run it) before finishing so coverage is collected.

## Pitfalls

- **No `Tester` story / no `meta.parameters.jest`** → the test isn't linked to a story; add it
  first (see `fabric-component`).
- Importing the component via `@/<pkg>/src` in a **test** — tests use `../src` (or
  `@react-fabric/<pkg>`), not the story-only alias.
- Behavior tests in Playwright — deferred; behavior tests stay in jsdom so coverage collects.
- Asserting on raw CSS/`class` internals — prefer `getByRole`/`getByText`; styles are
  data-attribute-driven and stubbed.
- Forgetting the MIT license header at the top of the test file.
- Barrels/`index.ts` carry `istanbul ignore file` — coverage is collected from `src` component
  code, not barrels.
