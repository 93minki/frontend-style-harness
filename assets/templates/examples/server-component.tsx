type Product = {
  id: string;
  name: string;
  price: number;
};

async function getProducts(): Promise<Product[]> {
  return [
    { id: "p1", name: "Keyboard", price: 120000 },
    { id: "p2", name: "Mouse", price: 45000 },
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">상품</h1>

      <ul className="mt-6 space-y-3">
        {products.map((product) => (
          <li key={product.id} className="rounded-md border p-4">
            <div className="flex items-center justify-between gap-4">
              <span>{product.name}</span>
              <span>{product.price.toLocaleString()}원</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

