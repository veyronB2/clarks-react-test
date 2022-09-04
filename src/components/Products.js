import React from "react";
import products from "../data/products";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

const initialState = { products: [] };

const Products = () => {
  const [state, setState] = useState(initialState, []);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setState(products);
  }

  return (
    <section className="mainbody__products">
      <p className="mainbody__title-text">
        We're proud to have been part of island life for almost 60 years now.
        That's why we've reworked three of our most iconic styles. Packed with
        exclusive new materials, patterns and colourways, they pay tribute to
        the individuality Jamaica is so famous for.
      </p>
      <div className="mainbody__products-container">
        {products.map((product) => {
          return <ProductItem {...product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
