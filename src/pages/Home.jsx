import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import ProductList from "../components/product/ProductList";
import { getAllProducts } from "../Firebase";
export default function Home() {
  console.log("");
  return (
    <div>
      <div className="w-full h-60  opacity-75 bg-[url('./asset/banner.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
        <span className="text-white text-5xl font-bold">Shop With US</span>
        <span className="text-white text-2xl">Best Products High Quality</span>
      </div>
      <ProductList />
    </div>
  );
}
