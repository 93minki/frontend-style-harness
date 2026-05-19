# Bad vs Good

This document should compare patterns the user wants to avoid with patterns they prefer.

## Avoid: Premature Utility Extraction

Bad:

```ts
function getVisibleProducts(products: Product[]) {
  return products.filter((product) => !product.isHidden);
}

export function ProductList({ products }: ProductListProps) {
  const visibleProducts = getVisibleProducts(products);

  return <ul>{/* ... */}</ul>;
}
```

Good:

```tsx
export function ProductList({ products }: ProductListProps) {
  const visibleProducts = products.filter((product) => !product.isHidden);

  return <ul>{/* ... */}</ul>;
}
```

## Avoid: Render Helpers Without A Clear Reason

Bad:

```tsx
function renderEmptyState() {
  return <p>상품이 없습니다.</p>;
}
```

Good:

```tsx
{products.length === 0 ? <p>상품이 없습니다.</p> : null}
```

## Confirmed Avoided Patterns

{{AVOIDED_PATTERNS}}

## Confirmed Preferred Patterns

{{PREFERRED_PATTERNS}}

