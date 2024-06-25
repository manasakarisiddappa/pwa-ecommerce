import React from "react";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Layout>
            <HomePage />
          </Layout>
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Layout>
            <ProductsPage />
          </Layout>
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Layout>
            <CartPage />
          </Layout>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
