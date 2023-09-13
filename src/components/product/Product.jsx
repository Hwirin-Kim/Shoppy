import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/products/${product.id}`, { state: product });
  };
  return (
    <div
      className="border border-gray-200 pb-3 cursor-pointer "
      onClick={onClick}
    >
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
