import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const items = useSelector((store) => store.cart);
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center fixed w-full">
      <h1 className="text-sm md:text-2xl">E-Commerce</h1>
      <nav>
        <ul className="text-sm md:text-2xl flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline">
              Cart({items.length})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
