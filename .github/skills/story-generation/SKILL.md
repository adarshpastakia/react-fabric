---
name: story-generation
description: "Use when: generating Storybook stories for React components in the react-fabric codebase. Triggers on 'generate stories', 'create storybook stories', 'add stories for component', 'write stories', or when asked to create Storybook stories for a component."
---

# Story Generation Skill

Generate Storybook stories for React components following the react-fabric conventions.

## Workflow

### Step 1: Analyze the Component

- Identify the component's purpose and props
- Identify any subcomponents (child components used within the main component)
- List all possible states (loading, error, empty, disabled, etc.)
- List all possible variations (variants, sizes, colors, etc.)

### Step 2: Interactive Confirmation

Before generating any code, always:

1. Ask the user if there are subcomponents that need stories
2. Provide a list of suggested story ideas (variations and states) — select all by default
3. Ask the user which stories to include (allow deselecting)
4. Ask the user if there are any other story ideas they want to add

### Step 3: Generate Stories

Generate the story files based on confirmed requirements.

## Rules

### Story Structure

- Each component gets one basic story (named `_ComponentName`) and one "Tester" story
- Create additional stories for variations and states where applicable
- Use the `autodocs` tag on documentation stories, `!autodocs` on tester stories

### Subcomponents

- When a component has subcomponents (e.g., `Card` and `CardCover`), generate separate story files for each
- The **main component** story file must:
  - Use `tags: ["autodocs"]`
  - Provide a `subComponents` object in meta listing all subcomponent story modules
- **Subcomponent** story files must:
  - **NOT** use `autodocs` (omit the `tags` field entirely or use `tags: []`)
  - Use the same `title` as the main component (e.g., `@core/components/Progress`) - Use **unique story names** that include the subcomponent name to avoid conflicts with the main component (e.g., `_SubComponent` instead of `_Component`, `Tester` → `SubComponentTester`)- Create an MDX file to show both component stories within a single Storybook page
- MDX file should be placed alongside the story files

### File Path Convention

Story files follow this directory structure:

```
packages/<package>/stories/<component_dir>/<ComponentName>.stories.tsx
```

- `<package>` — package name (e.g., `core`, `form`, `data`)
- `<component_dir>` — component folder/directory name (e.g., `pillbox`, `button`, `card`)
- `<ComponentName>` — component name (e.g., `Pillbox`, `Button`, `Card`)
- Example: `packages/core/stories/components/pillbox/Pillbox.stories.tsx`

### Naming Conventions

- Basic story: `_ComponentName` (underscore prefix keeps it at top of list)
- Tester story: `Tester`
- **Unique naming**: Main and subcomponent stories must have distinct names to avoid conflicts. Subcomponent stories should prefix with the subcomponent name (e.g., `_SubComponent`, `SubComponentSizes`, `SubComponentColors`, `SubComponentTester`)
- MDX file: `<ComponentName>.mdx` (placed alongside story files)

## Story Boilerplate (TSX)

### Main Component

```tsx
import { Component, SubComponent } from "@/<package>/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import { fn } from "storybook/test";

const meta: Meta = {
  component: Component,
  // No autodocs tag when having subcomponents with mdx
  subComponents: { SubComponent },
  title: "@<package>/<component_dir>/Component",
  parameters: {
    layout: "centered",
    jest: ["<package>/tests/<component_dir>/Component.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ComponentStory = StoryObj<typeof Component>;

export const _Component: ComponentStory = {
  render: (args) => {
    return <Component {...args}>...</Component>;
  },
  args: {},
};

export const TesterComponentMain: ComponentStory = {
  tags: ["!autodocs"],
  render: (args) => <Component {...args} />,
  args: {},
};
```

### Subcomponent

```tsx
import { SubComponent } from "@/<package>/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import { fn } from "storybook/test";

const meta: Meta = {
  component: SubComponent,
  // No autodocs tag for subcomponents
  title: "@<package>/<component_dir>/Component",
  parameters: {
    layout: "centered",
    jest: ["<package>/tests/<component_dir>/SubComponent.test.tsx"],
   },
  decorators: [
     (Story) => (
       <div className="w-full max-w-2xl p-4">
         <Story />
       </div>
     ),
   ],
};

export default meta;
type SubComponentStory = StoryObj<typeof SubComponent>;

export const _SubComponent: SubComponentStory = {
  render: (args) => {
    return <SubComponent {...args} />;
   },
  args: {},
};

export const TesterComponentSub: SubComponentStory = {
  // No autodocs tag for subcomponents
  render: (args) => <SubComponent {...args} />,
```

## MDX Boilerplate

```tsx
import { Collapsable } from "@/core/src";
import {
  Anchor,
  ArgTypes,
  Canvas,
  Controls,
  Description,
  Meta,
  Primary,
  Story,
  Subheading,
  Title,
} from "@storybook/addon-docs/blocks";
import { Fragment } from "react";
import * as ComponentStories from "./Component.stories";
import * as SubComponentStories from "./SubComponent.stories";

<Meta of={ComponentStories} />

<Title>Component</Title>

<Anchor storyId="component">
  <Subheading>Basic</Subheading>
</Anchor>

<Description of={ComponentStories} />

<Canvas withToolbar of={ComponentStories._Component} />

<Collapsable className="control-panel">
  <div>Controls</div>
  <Controls of={ComponentStories._Component} />
</Collapsable>

--- other component stories here ---

<Anchor storyId="subcomponent">
  <Subheading>Sub Component</Subheading>
</Anchor>
<Description of={SubComponentStories} />
<Canvas withToolbar of={SubComponentStories._SubComponent} />
<Collapsable className="control-panel">
  <div>Controls</div>
  <Controls of={SubComponentStories._SubComponent} />
</Collapsable>

--- other subcomponent stories here ---

<hr />

<Anchor storyId="props">
  <Subheading>Props</Subheading>
</Anchor>

<ArgTypes sort="requiredFirst" />
```

## Checklist

Before finalizing stories, verify:

- [ ] Basic story (`_ComponentName`) is present with proper args
- [ ] `Tester` story is present with `!autodocs` tag
- [ ] Additional stories cover all variations and states
- [ ] Subcomponent stories are generated separately if applicable
- [ ] MDX file created when multiple components need to be shown together
- [ ] Story titles follow `@<package>/<component_parent_folder>/ComponentName` pattern
- [ ] Decorators include wrapper div with appropriate sizing
- [ ] Jest parameter points to the correct test file path
