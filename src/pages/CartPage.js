import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  return (
    <div className="container mx-auto p-4 pt-14 md:pt-20">
      <h1 className="text-2xl mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cart.map((item) => (
            <ProductCard key={item.id} product={item} page="cart" />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
