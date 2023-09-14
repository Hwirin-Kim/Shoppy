import React from "react";
import { useAuthContext } from "../components/context/AuthContext";
import CartItem from "../components/carts/CartItem";
import PriceCard from "../components/carts/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button";
import useCarts from "../hooks/useCarts";

export default function MyCart() {
  const { user } = useAuthContext();
  const {
    cartsQuery: { isLoading, data: products },
  } = useCarts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const hasProducts = products && products.length > 0;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) =>
        prev + parseInt(current.price) * parseInt(current.quantity),
      0
    );
  const SHIPPING = 3000;
  return (
    <section className="p-8">
      <p className="text-2xl text-center font-bold pd-4 border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProducts && <p>장바구니에 상품이 없습니다!</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {products &&
              products.map((product) => {
                return (
                  <CartItem key={product.id} product={product} uid={user.uid} />
                );
              })}
          </ul>
          <div className="flex justify-between items-center px-2 md:px-8 lg:px-16 mb-6">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="최종 금액" price={totalPrice + SHIPPING} />
          </div>
          <Button>주문하기</Button>
        </>
      )}
    </section>
  );
}
