import React from "react";

export default function Product({ product }) {
  return (
    <div className="border border-gray-200 pb-3">
      <img
        className="w-full h-100 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="flex justify-between">
        <span className="text-sm">{product.title}</span>
        <span className="text-sm">₩{product.price}</span>
      </div>
      <span className="text-sm">{product.category}</span>
    </div>
  );
}
