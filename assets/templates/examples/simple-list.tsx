type Product = {
  id: string;
  name: string;
  price: number;
  isSoldOut: boolean;
};

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return <p className="text-sm text-gray-500">상품이 없습니다.</p>;
  }

  return (
    <ul className="space-y-3">
      {products.map((product) => (
        <li
          key={product.id}
          className={`rounded-md border p-4 ${
            product.isSoldOut ? "opacity-50" : ""
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-medium">{product.name}</span>
            <span className="text-sm text-gray-600">
              {product.price.toLocaleString()}원
            </span>
          </div>

          {product.isSoldOut ? (
            <p className="mt-2 text-sm text-red-600">품절</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

