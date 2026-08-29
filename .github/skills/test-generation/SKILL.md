---
name: test-generation
description: "Use when: writing component tests for React components in the react-fabric codebase. Triggers on 'write tests', 'generate tests', 'add tests for component', 'create test suite', or when asked to test a component."
---

# Test Generation Skill

Generate Jest tests for React components following the react-fabric conventions.

## Workflow

### Step 1: Check for Tester Story

Before writing tests, always check if the component has a "Tester" story in its Storybook stories:

- If `Tester` story exists → use it as the basis for tests
- If `Tester` story is missing → use the **story-generation** skill first to generate stories, then proceed with tests

### Step 2: Interactive Confirmation

Before writing any tests, always:

1. Analyze the component and its Tester story to identify testable functionality
2. Provide the user with a list of suggested test ideas (all major functionalities) — select all by default
3. Ask the user which tests to include (allow deselecting)
4. Ask the user if there are any other test ideas they want to add

### Step 3: Generate Tests

Generate the test file based on confirmed requirements.

## Rules

### Test File Location

- Test files go in: `packages/<package>/tests/<component_folder>/<ComponentName>.test.tsx`
- Follow the pattern: `packages/<package>/tests/**/*.test.tsx`

### Test Setup

- Always import `@testing-library/react` for rendering and querying
- Always import `@testing-library/jest-dom` for matchers
- Use the `TestWrapper` from `jest/TestWrapper.tsx` for consistent provider context (i18n + ApplicationProvider)
- Mock external dependencies as needed (MSW for API calls, etc.)

### Test Structure

- Use `describe` blocks to group related tests
- Use `it` or `test` for individual test cases
- Follow AAA pattern: Arrange, Act, Assert
- Keep tests focused on one behavior per test case
- Use meaningful test names that describe the behavior being tested

### Testing Focus Areas

- **Props behavior**: How component renders with different props
- **User interactions**: Clicks, inputs, keyboard events, etc.
- **State changes**: Component state transitions
- **Side effects**: API calls, localStorage, timers
- **Edge cases**: Empty states, error states, loading states
- **Accessibility**: ARIA attributes, keyboard navigation

## Test Boilerplate

```tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { Component } from "@react-fabric/<package>";
import type { ComponentProps } from "@react-fabric/<package>";

// Mock any external dependencies
jest.mock("@react-fabric/<package>/some-module", () => ({
  someFunction: jest.fn().mockReturnValue("mocked"),
}));

describe("<Component />", () => {
  const defaultProps: ComponentProps<typeof Component> = {
    // default props
  };

  const renderComponent = (props = defaultProps) => {
    return render(<Component {...props} />);
  };

  it("renders correctly with default props", () => {
    renderComponent();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("handles user interaction correctly", async () => {
    const user = userEvent.setup();
    const mockCallback = jest.fn();
    renderComponent({ onClick: mockCallback });

    await user.click(screen.getByRole("button"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("displays loading state when loading prop is true", () => {
    renderComponent({ isLoading: true });
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.queryByTestId("content")).not.toBeInTheDocument();
  });

  it("handles error state correctly", async () => {
    renderComponent({ isError: true, error: "Something went wrong" });
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
```

## Checklist

Before finalizing tests, verify:

- [ ] Tester story exists (or was generated using story-generation skill)
- [ ] Test file is in correct location: `packages/<package>/tests/<component_folder>/`
- [ ] Test file uses `.test.tsx` extension
- [ ] TestWrapper is imported for consistent provider context
- [ ] All major functionalities are covered by tests
- [ ] User interactions use `userEvent` for realistic behavior
- [ ] Async operations use `waitFor` or `waitForElementToBeRemoved`
- [ ] Mocks are properly set up and cleaned up
- [ ] Test names describe the behavior being tested
- [ ] No hardcoded timeouts (`jest.advanceTimersByTime` preferred over `jest.useFakeTimers`)
- [ ] Accessibility considerations are tested where applicable
