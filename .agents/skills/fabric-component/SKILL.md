---
name: fabric-component
description: "Author or modify a React-Fabric component following the house conventions: React 19 function component (no `import React`), full MIT license header, JSDoc on the component and on every prop with `@example`, data-attribute-driven Tailwind v4 styling in `css/`, published-name imports (`@react-fabric/*`), `cn` for class merges, the polymorphic `as`/`PolymorphicProps` pattern, and a matching `Tester` story wired with `meta.parameters.jest`. Use when creating a new @react-fabric component, adding a form field / control, styling a component, or creating its Tester story. Triggers: new component, build a Button, add a component, style a component, create a Tester story, data-attribute styling."
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
---

# Fabric Component Authoring

Use this skill whenever you create or modify a component under `packages/<pkg>/src/`.
It encodes the conventions in `AGENTS.md` as an actionable checklist so a new component
matches the library's house style on the first pass.

## Checklist (do all, in order)

1. **File location & shape.** Put the component in `packages/<pkg>/src/...` (e.g.
   `src/components/<group>/Name.tsx`). Keep a matching `css/` file for its styles and a
   `stories/<group>/Name.stories.tsx` file. Export it from the package barrel `src/index.ts`.
2. **License header.** Every source file starts with the full MIT license block. Copy it
   verbatim from an existing file in the same package (do not hand-type it).
3. **Imports use published names.** `import { cn, Format } from "@react-fabric/utilities"`,
   `import { ApplicationProvider } from "@react-fabric/core"`, etc. Never use
   `@/<pkg>/src` in component source — that alias is for **story files only**.
4. **React 19, no `import React`.** The `react-jsx` transform is on; do not import React.
5. **Props interface with JSDoc on every property.** A `XxxProps` interface where each prop
   has a `/** one-line description */` block. No `@type`/`@default` tags — the TS annotation
   is the source of truth.
6. **Component JSDoc with `@example`.** A block above the component with a 1–3 sentence
   description and an `@example` showing a JSX usage + a comment on what it renders.
7. **Data-attribute-driven styling.** Vary by `data-variant` / `data-color` / `data-size` /
   … on the element, and drive the actual styles from Tailwind v4 `is-*` / `data-*` variants
   and CSS custom properties (`--fabric-*`, `--progress`, …) in the package `css/` files
   (Tailwind v4: `@import "tailwindcss"`, `@theme`, CSS-first — not v3 `@apply`-heavy).
   Merge class strings with `cn` from `@react-fabric/utilities`; avoid ad-hoc inline class
   strings. Use `ApplicationProvider` context for theming.
8. **Polymorphic `as` where the element renders as different tags** (e.g. `Button as="a"`),
   via the `PolymorphicProps` pattern (see the `Button` component for the shape).
9. **i18n** for any user-facing text, via i18next keys (key separator `.`).
10. **Create the `Tester` story** (see below) so the component is test-ready.

## Skeleton

````tsx
/*
 * <copy the full MIT license header from an existing file in this package>
 */

import { cn } from "@react-fabric/utilities";
// import from other @react-fabric/* packages by published name

export interface NameProps {
  /**
   * One-line description of the prop.
   */
  prop?: "a" | "b";
  /**
   * Another prop, described.
   */
  other?: number;
}

/**
 * A short description of what Name does and when to use it.
 *
 * @example
 * ```jsx
 * <Name prop="a" other={0.5} />
 * // Renders a Name with prop set to "a".
 * ```
 */
export function Name({ prop = "a", other = 0 }: NameProps) {
  return (
    <div data-variant={/* ... */} data-size={/* ... */} className={cn("fabric-name" /* base classes */)}>
      {/* ... */}
    </div>
  );
}
````

### The `Tester` story (create alongside the component)

Every component story file must export an "empty" story named `Tester` whose `render` is just
`<Component {...args} />` with `tags: ["!autodocs"]`. The meta's `jest` array links the story
to its test file. See the `fabric-test` skill for the test side.

```tsx
import { Name } from "@/<pkg>/src"; // @/<pkg>/src is STORY-FILE ONLY
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Name,
  title: "@<pkg>/group/Name",
  parameters: {
    layout: "centered",
    jest: ["<pkg>/tests/name/Name.test.tsx"], // links this story to its test
  },
};
export default meta;
type NameStory = StoryObj<typeof Name>;

export const Tester: NameStory = {
  tags: ["!autodocs"],
  render: (args) => <Name {...args} />,
  args: {
    /* sensible defaults mirroring the component */
  },
};
// …other showcase stories (variants, sizes, colors) live in the same file
```

## Verify before declaring done

```bash
npx jest packages/<pkg>/tests          # behavior tests, if any
npm run lint                           # eslint (type-checked) + stylelint + tsc build:dts
cd packages/<pkg> && npm run build     # rollup + dts for just this package
```

## Pitfalls

- `@/<pkg>/src` in component source → build/lint failure. It is for **story files only**.
- Forgetting the MIT license header or JSDoc on a prop → lint/dts review flags it; both are mandatory.
- `import React` → unnecessary under `react-jsx`; remove it.
- Tailwind **v4** syntax — no v3 `@apply`-first / `tailwind.config`-first assumptions.
- Inline class strings instead of `cn` + data-attribute styling → drift from house style.
