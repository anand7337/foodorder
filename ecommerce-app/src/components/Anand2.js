import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    //الاسماء دي جاهزة في اليوز كارت كل اسم بيدل علي اللي بيعمله
    isEmpty,
    //دي العدد للمنتج الواحد
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  const buy = () => {
   
  };
  if (isEmpty) return <h1 className="text-center">  </h1>;
  return (
    <section className="container Dinner0002">
      <div className="row jistufy-content-center">
        <div className="col-12">
          <h5>
            {" "}
      {totalItems}
          </h5>
         
        </div>
      </div>
    </section>
  );
};

export default Cart;
