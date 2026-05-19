type Product = {
  id: string;
  name: string;
};

type ProductStatusProps = {
  isLoading: boolean;
  errorMessage?: string;
  products: Product[];
};

export function ProductStatus({
  isLoading,
  errorMessage,
  products,
}: ProductStatusProps) {
  if (isLoading) {
    return <p className="text-sm text-gray-500">상품을 불러오는 중입니다.</p>;
  }

  if (errorMessage) {
    return <p className="text-sm text-red-600">{errorMessage}</p>;
  }

  if (products.length === 0) {
    return <p className="text-sm text-gray-500">상품이 없습니다.</p>;
  }

  return (
    <ul className="space-y-2">
      {products.map((product) => (
        <li key={product.id} className="rounded-md border p-3">
          {product.name}
        </li>
      ))}
    </ul>
  );
}

