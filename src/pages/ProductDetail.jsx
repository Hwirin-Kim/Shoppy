import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const { state: product } = useLocation();
  const [selected, setSelected] = useState(
    product.options && product.options[0]
  );
  const onChangeHandler = (e) => {
    setSelected(e.target.value);
  };
  const onClickHandler = () => {};
  return (
    <div className="p-3">
      <p className="mx-12 mt-4 text-gray-700">{product.category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img
          className="w-full px-4 basis-7/12"
          src={product.image}
          alt={product.title}
        />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="font-bold text-3xl py-2">{product.title}</h2>
          <p className="font-bold text-2xl py-2 border-b border-gray-400">
            ₩{product.price}
          </p>
          <p className="text-lg py-4">{product.description}</p>
          <div className="flex items-center ">
            <label className="text-brand font-bold" htmlFor="select">
              옵션:
            </label>
            <select
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              id="select"
              onChange={onChangeHandler}
            >
              {product.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <Button onClick={onClickHandler}>장바구니에 추가</Button>
        </div>
      </section>
    </div>
  );
}
