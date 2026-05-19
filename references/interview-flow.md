# Interview Flow

Use this interview to discover the user's frontend coding style without forcing a philosophy label too early.

Keep the tone friendly and practical. Prefer "Which example looks closer to how you write code?" over "What is your coding philosophy?"

## Opening

Ask these first:

1. Which tool should this harness support?
   - Codex
   - Claude Code
   - Both

2. Which language should the generated docs use?
   - Korean
   - English

3. May I inspect this project before generating the harness?
   - Yes, inspect existing files and patterns.
   - No, use only interview answers and samples.

If the user allows inspection, read only a small, relevant sample first:

- `AGENTS.md`
- `CLAUDE.md`
- `package.json`
- `app/`, `pages/`, `src/`, `components/`, `lib/`
- `.codex/skills/`
- `.claude/skills/`
- `ai-style-examples/`

Do not modify anything during this phase.

## Selectable Style Questions

Ask with short code examples where useful. The examples are not rules; they help the user choose.

### TypeScript Functions

Ask which form looks closer to their usual style:

- `function getTotalPrice(prices: number[]) { ... }`
- `const getTotalPrice = (prices: number[]) => { ... };`
- Follow the existing project style.

### React Components

Ask which form they usually use:

- `function ProductCard() { ... }`
- `const ProductCard = () => { ... };`
- Follow the existing project style.

### TypeScript Types

Ask how they usually declare object and props types:

- `type Product = { ... }`
- `interface Product { ... }`
- It depends on the situation.
- Follow the existing project style.

### Props Typing

Ask where props types usually live:

- A named type above the component.
- Inline for tiny components, named type when it grows.
- Follow the existing project style.

### Conditional Rendering

Ask which pattern they prefer for simple UI states:

- Directly in JSX.
- Assigned to a local variable before return.
- Split into render helpers.
- It depends on complexity.

### List Rendering

Ask which pattern they prefer for a simple list:

- `map` directly inside JSX.
- Store mapped items in a variable.
- Split list items into a child component.
- It depends on item size and reuse.

### Form State

Ask how they usually manage a small form:

- One `useState` per field.
- One object state for the whole form.
- Form library.
- Custom hook.
- It depends on form size.

### Next.js App Router Data Loading

Ask where simple server data loading should live:

- Directly in the server component.
- A page-specific load function.
- A service/data layer.
- Follow the existing project style.

### TailwindCSS Class Names

Ask how they usually write class names:

- Directly in `className`.
- Move to a variable when long.
- Use `cn` or another helper.
- Follow existing formatting tools.

### Conditional Class Names

Ask how they usually write conditional classes:

- Template literal and ternary expressions.
- `cn` or a similar helper.
- Array plus `filter(Boolean).join(" ")`.
- Follow the existing project style.

### Component Splitting

Show a scenario:

> A product list contains a 15-20 line product card JSX block. The card is used only once for now.

Ask what they would do:

- Keep it inside the list component.
- Split it into `ProductCard`.
- Extract a `renderProduct` helper.
- It depends on whether the JSX has a clear meaning boundary.

### Custom Hook Splitting

Show a scenario:

> A list component owns search text, selected filter, sort order, and filtered results. No other component uses this logic yet.

Ask what they would do:

- Keep the logic in the component.
- Extract a custom hook when the component becomes hard to read.
- Extract a custom hook early.
- Move to shared/global state.

## Code Sample Prompt

Before samples, explain:

> These samples are not tests. They help capture your usual naming, typing, JSX, state, and TailwindCSS patterns. They do not need to be perfect. Write them the way you would in a real project.

### Required Sample 1: TypeScript Function

Ask the user to write a TypeScript function:

Requirements:

- It receives an array of product prices.
- Example input: `[2000, 3000, 5000]`
- It returns total and average.
- For the example input, total is `10000` and average is `3333.333...`.
- For an empty array, return total `0` and average `0`.
- Include input and return types as they normally would.
- Function name, parameter names, and return type style are up to the user.

### Required Sample 2: React List Component

Ask the user to write a React component:

Data example:

```ts
[
  { id: "p1", name: "Keyboard", price: 120000, isSoldOut: false },
  { id: "p2", name: "Mouse", price: 45000, isSoldOut: true },
  { id: "p3", name: "Monitor", price: 320000, isSoldOut: false },
]
```

Requirements:

- Receive `products` as props.
- Show product name and price.
- Show a sold-out label for sold-out products.
- Visually dim sold-out products.
- If `products` is empty, show "상품이 없습니다." or the selected-language equivalent.
- Write TypeScript props in the user's normal style.
- If using TailwindCSS, write class names in the user's normal style.

### Optional Sample 1: Form State Component

Offer this for more accuracy. The user may skip it.

Requirements:

- It has `title` and `description` input fields.
- Initial values are empty strings.
- Title is required.
- Disable submit when title is empty.
- On submit, `console.log` the current values.
- The user may decide whether to reset after submit.
- Handle TypeScript event types as they normally would.
- Use TailwindCSS if they normally would.

### Optional Sample 2: Conditional Tailwind Button

Offer this for more accuracy. The user may skip it.

Props:

- `label: string`
- `isSelected: boolean`
- `disabled?: boolean`
- `onClick: () => void`

Requirements:

- Show `label` as button text.
- Show selected styling when `isSelected` is true.
- If `disabled` is true, make it unclickable and visually dimmed.
- Ensure `onClick` does not run when disabled.
- Write TailwindCSS and conditional classes in the user's normal style.

## Analysis Summary

Before writing files, summarize:

- platform targets
- selected answers
- patterns found in code samples
- project patterns found, if inspection was approved
- conflicts or weak signals
- final style rules to generate

Do not generate files until the user approves this summary and the file plan.

