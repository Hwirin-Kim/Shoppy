import useProducts from "../../hooks/useProducts";
import Product from "./Product";

export default function ProductList() {
  const {
    getProduct: { isLoading, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className="grid p-3 sm:grid-cols-2 lg:grid-cols-3  gap-3">
        {products &&
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
    </>
  );
}
