import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useCarts from "../../hooks/useCarts";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

export default function CartItem({ product, uid }) {
  const { removeCart, addCart } = useCarts();

  const onClickMinus = () => {
    if (product.quantity < 2) return;

    addCart.mutate({ ...product, quantity: product.quantity - 1 });
  };

  const onClickPlus = () => {
    addCart.mutate({ ...product, quantity: product.quantity + 1 });
  };
  const onClickDelete = () => {
    removeCart.mutate(product.id);
  };
  return (
    <li className="flex justify-between my-2 items-center">
      <img
        className="w-24 md:w-48 rounded-lg"
        src={product.image}
        alt={product.title}
      />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{product.title}</p>
          <p className="text-xl font-bold text-brand">{product.options}</p>
          <p>₩{product.price}</p>
        </div>
        <div className="text-2xl flex items-center">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={onClickMinus} />
          <span>{product.quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={onClickPlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={onClickDelete} />
        </div>
      </div>
    </li>
  );
}
