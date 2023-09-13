import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Firebase";
import Product from "./Product";

export default function ProductList() {
  const { data: products, isLoading } = useQuery(
    ["getAllProducts"],
    getAllProducts
  );

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
