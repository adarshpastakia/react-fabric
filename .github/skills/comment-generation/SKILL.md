---
name: comment-generation
description: "Use when: generating JSDoc comments for React components, hooks, or helper functions in the react-fabric codebase. Triggers on 'add comments', 'generate docs', 'document this function', 'write JSDoc', or when asked to comment a component/hook/function."
---

# Comment Generation Skill

Generate JSDoc comments for React components, hooks, and helper functions following the react-fabric conventions.

## Rules

### Format

All comments must use JSDoc format:

```
/**
 * --- comments go here ---
 */
```

### React Components

- Provide a short description of what the component does
- DO NOT add `@param` to list props — the Props interface is self-documenting
- Keep it concise (1-2 sentences max)

Example:

```tsx
/**
 * A modal dialog overlay with customizable header, body, and footer sections.
 * Supports closing via backdrop click, escape key, and explicit close action.
 */
export function Modal(props: ModalProps) { ... }
```

### React Props Interfaces

- Describe each property in the Props interface
- DO NOT add `@type` or `@default` tags
- Always use multiline comments (wrap at ~80 chars)
- Keep descriptions concise and actionable

Example:

````tsx
export interface ModalProps {
   /**
    * Whether the modal is currently visible to the user.
    */
  isOpen: boolean;

   /**
    * Callback invoked when the modal should close.
    * Triggered by backdrop click, escape key, or close button.
    */
  onClose: () => void;

   /**
    * Optional title displayed in the modal header section.
    * If omitted, the header area is hidden entirely.
    */

### React Hooks
- Provide a description of what the hook does
- Describe where/when it may be used
- Keep it concise (1-2 sentences)

Example:
```tsx
/**
 * Manages form state and validation for react-hook-form integration.
 * Use in form components that need custom validation logic or form submission handling.
 */
export function useFormContext() { ... }
````

### Complex Functions

- Add inline `//` comments for complex steps
- Explain the "why" not the "what"
- Keep to a single line per step

Example:

```tsx
export function processData(data: Data[]) {
  // Normalize data to ensure consistent date formats
  const normalized = data.map((item) => normalizeDate(item.date));
  // Filter out entries older than the retention window
  const recent = normalized.filter((item) => isWithinRetentionPolicy(item));
  return recent;
}
```

## Checklist

Before finalizing comments, verify:

- [ ] All comments use JSDoc `/** ... */` format (not `//` for functions/hooks/components)
- [ ] Component descriptions are short (1-2 sentences, no props listing)
- [ ] Props are described without `@type` or `@default` tags
- [ ] Hook descriptions include usage context
- [ ] Complex logic has inline `//` comments explaining the "why"
- [ ] No redundant comments that repeat what the code already shows
