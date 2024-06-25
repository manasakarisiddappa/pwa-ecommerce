import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(
          "Failed to fetch products from network, trying cache",
          error
        );
        setIsOffline(true);
      }
    };

    fetchProducts();

    window.addEventListener("online", () => setIsOffline(true));
    window.addEventListener("offline", () => setIsOffline(false));

    return () => {
      window.removeEventListener("online", () => setIsOffline(true));
      window.removeEventListener("offline", () => setIsOffline(false));
    };
  }, []);

  return (
    <div className="container mx-auto p-4 pt-14 md:pt-20">
      {isOffline && (
        <p className="text-red-500">
          You are offline. Displaying cached products.
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
