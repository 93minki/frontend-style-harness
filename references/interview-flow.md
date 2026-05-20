# Interview Flow

Use this interview to discover the user's frontend coding style without forcing a philosophy label too early.

The interview should feel like a guided conversation, not a survey dump. Keep the tone friendly and practical. Prefer "Which example looks closer to how you write code?" over "What is your coding philosophy?"

## Pacing Rules

- Never ask the entire style questionnaire in one message.
- Ask the opening/setup questions first, then move through topic groups.
- Ask at most 3-4 selectable questions per turn.
- Ask at most one required code sample per turn unless the user explicitly asks for a one-shot interview.
- After each topic group, briefly summarize what was learned before asking the next topic group.
- If the user says "빠르게", "한 번에", or similar, compress the interview to no more than two groups per message while still keeping examples visible.
- If the user already answered a topic, do not ask it again. Carry the answer forward and only ask about missing or conflicting signals.

## Opening

Ask these first in one short message:

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

## Topic Group 1: TypeScript Shape

Ask these together after setup and optional project inspection.

### TypeScript Functions

Ask which form looks closer to their usual style:

Option A:

```ts
function getTotalPrice(prices: number[]) {
  return prices.reduce((total, price) => total + price, 0);
}
```

Option B:

```ts
const getTotalPrice = (prices: number[]) => {
  return prices.reduce((total, price) => total + price, 0);
};
```

Option C:

```txt
Follow the existing project style unless I say otherwise.
```

### Object and Props Types

Ask how they usually declare object and props types:

Option A:

```ts
type Product = {
  id: string;
  name: string;
};
```

Option B:

```ts
interface Product {
  id: string;
  name: string;
}
```

Option C:

```txt
It depends. For example, type for unions/composition and interface for public object shapes.
```

Option D:

```txt
Follow the existing project style.
```

### Props Typing Location

Ask where props types usually live:

Option A:

```tsx
type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return <article>{product.name}</article>;
}
```

Option B:

```tsx
function ProductCard({ product }: { product: Product }) {
  return <article>{product.name}</article>;
}
```

Option C:

```txt
Inline for tiny components, named type when the shape grows.
```

Option D:

```txt
Follow the existing project style.
```

## Topic Group 2: React Component Structure

Ask these together after TypeScript shape is known.

### React Components

Ask which form they usually use:

Option A:

```tsx
function ProductCard() {
  return <article>Keyboard</article>;
}
```

Option B:

```tsx
const ProductCard = () => {
  return <article>Keyboard</article>;
};
```

Option C:

```txt
Follow the existing project style.
```

### Conditional Rendering

Ask which pattern they prefer for simple UI states:

Option A: direct in JSX

```tsx
return (
  <section>
    {products.length === 0 ? <p>상품이 없습니다.</p> : <ProductList products={products} />}
  </section>
);
```

Option B: assign content before `return`

```tsx
const content =
  products.length === 0 ? <p>상품이 없습니다.</p> : <ProductList products={products} />;

return <section>{content}</section>;
```

Option C: render helper for branching

```tsx
function renderContent() {
  if (products.length === 0) return <p>상품이 없습니다.</p>;
  return <ProductList products={products} />;
}

return <section>{renderContent()}</section>;
```

Option D:

```txt
It depends on complexity.
```

### List Rendering

Ask which pattern they prefer for a simple list:

Option A: `map` directly inside JSX

```tsx
return (
  <ul>
    {products.map((product) => (
      <li key={product.id}>{product.name}</li>
    ))}
  </ul>
);
```

Option B: mapped items in a variable

```tsx
const productItems = products.map((product) => (
  <li key={product.id}>{product.name}</li>
));

return <ul>{productItems}</ul>;
```

Option C: child component when the item has meaningful UI

```tsx
return (
  <ul>
    {products.map((product) => (
      <ProductListItem key={product.id} product={product} />
    ))}
  </ul>
);
```

Option D:

```txt
It depends on item size and reuse.
```

## Topic Group 3: State and Data

Ask these together after React structure is known.

### Form State

Ask how they usually manage a small form:

Option A: one state per field

```tsx
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
```

Option B: one object state

```tsx
const [form, setForm] = useState({
  title: "",
  description: "",
});
```

Option C:

```txt
Use a form library when validation or nested fields appear.
```

Option D:

```txt
Extract a custom hook when the form logic starts to dominate the component.
```

Option E:

```txt
It depends on form size.
```

### Next.js App Router Data Loading

Ask where simple server data loading should live:

Option A: directly in the server component

```tsx
export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductList products={products} />;
}
```

Option B: a page-specific load function

```tsx
async function loadProductsPage() {
  const products = await getProducts();
  return { products };
}

export default async function ProductsPage() {
  const { products } = await loadProductsPage();

  return <ProductList products={products} />;
}
```

Option C: service/data layer

```tsx
export default async function ProductsPage() {
  const products = await productService.getProducts();

  return <ProductList products={products} />;
}
```

Option D:

```txt
Follow the existing project style.
```

### Custom Hook Splitting

Show this scenario:

> A list component owns search text, selected filter, sort order, and filtered results. No other component uses this logic yet.

Ask what they would do:

- Keep the logic in the component.
- Extract a custom hook when the component becomes hard to read.
- Extract a custom hook early.
- Move to shared/global state.

## Topic Group 4: TailwindCSS

Ask these together after state/data is known.

### TailwindCSS Class Names

Ask how they usually write class names:

Option A: direct in `className`

```tsx
<article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
  {product.name}
</article>
```

Option B: move long classes to a variable

```tsx
const cardClassName = "rounded-lg border border-zinc-200 bg-white p-4 shadow-sm";

return <article className={cardClassName}>{product.name}</article>;
```

Option C: use `cn` or another helper

```tsx
<article className={cn("rounded-lg border border-zinc-200 bg-white p-4 shadow-sm")}>
  {product.name}
</article>
```

Option D:

```txt
Follow existing formatting tools.
```

### Conditional Class Names

Ask how they usually write conditional classes:

Option A: template literal and ternary expressions

```tsx
<article className={`rounded-lg border p-4 ${isSoldOut ? "opacity-50" : ""}`}>
  {product.name}
</article>
```

Option B: `cn` or a similar helper

```tsx
<article className={cn("rounded-lg border p-4", isSoldOut && "opacity-50")}>
  {product.name}
</article>
```

Option C: array plus `filter(Boolean).join(" ")`

```tsx
<article className={["rounded-lg border p-4", isSoldOut && "opacity-50"].filter(Boolean).join(" ")}>
  {product.name}
</article>
```

Option D:

```txt
Follow the existing project style.
```

## Topic Group 5: Splitting Boundaries

Ask these together after TailwindCSS is known.

### Component Splitting

Show this scenario:

> A product list contains a 15-20 line product card JSX block. The card is used only once for now.

Ask what they would do:

- Keep it inside the list component.
- Split it into `ProductCard`.
- Extract a `renderProduct` helper.
- It depends on whether the JSX has a clear meaning boundary.

If they choose "it depends", ask for one sentence on the boundary they use, for example:

```txt
분리 기준: JSX가 자체 이름을 가질 만큼 의미가 분명하거나, 리스트 흐름을 읽기 어렵게 만들 때 분리한다.
```

### Utility Function Extraction

Show this scenario:

> A component formats product prices, computes discounts, and filters visible products. The logic is only used here.

Ask what they would do:

- Keep small formatting inline.
- Extract named helpers in the same file.
- Move helpers to `lib/` or `utils/` early.
- It depends on reuse, testability, or readability.

## Code Sample Prompt

Before samples, explain:

> These samples are not tests. They help capture your usual naming, typing, JSX, state, and TailwindCSS patterns. They do not need to be perfect. Write them the way you would in a real project.

Ask the two required samples in separate turns unless the user explicitly asks to answer everything at once.

### Required Sample 1: TypeScript Function

Ask the user to write or edit a TypeScript function:

Requirements:

- It receives an array of product prices.
- Example input: `[2000, 3000, 5000]`
- It returns total and average.
- For the example input, total is `10000` and average is `3333.333...`.
- For an empty array, return total `0` and average `0`.
- Include input and return types as they normally would.
- Function name, parameter names, and return type style are up to the user.

Offer this starter only as a convenience, and tell the user they may change any names, types, or structure:

```ts
type PriceSummary = {
  total: number;
  average: number;
};

function summarizePrices(prices: number[]): PriceSummary {
  // Write this in your usual style.
}
```

If the user prefers arrow functions, show this alternative:

```ts
type PriceSummary = {
  total: number;
  average: number;
};

const summarizePrices = (prices: number[]): PriceSummary => {
  // Write this in your usual style.
};
```

### Required Sample 2: React List Component

Ask the user to write or edit a React component.

Data shape:

```ts
type Product = {
  id: string;
  name: string;
  price: number;
  isSoldOut: boolean;
};
```

Example data:

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

Offer one starter only as a convenience:

```tsx
type Product = {
  id: string;
  name: string;
  price: number;
  isSoldOut: boolean;
};

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  // Write this in your usual style.
}
```

Tell the user they can freely change:

- `type` to `interface`
- `function` to arrow component
- inline props vs named props type
- direct JSX vs helper variables
- TailwindCSS class composition style
- price formatting style

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

Starter:

```tsx
function ProductForm() {
  // Show how you normally manage two fields and submit state.
}
```

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

Starter:

```tsx
type FilterButtonProps = {
  label: string;
  isSelected: boolean;
  disabled?: boolean;
  onClick: () => void;
};

function FilterButton(props: FilterButtonProps) {
  // Write this in your usual style.
}
```

## Analysis Summary

Before writing files, summarize:

- platform targets
- selected answers, grouped by topic
- patterns found in code samples
- project patterns found, if inspection was approved
- conflicts or weak signals
- final style rules to generate

Do not generate files until the user approves this summary and the file plan.
