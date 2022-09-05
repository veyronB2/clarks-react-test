import React from "react";
import Link from "./Link";

const ProductItem = ({ image, name, colour, desc }) => {
  return (
    <div className="mainbody__product-item">
      <div className="product-img">
        <img src={image} alt={name} />
        <div className="product-text">
          <h2>{name}</h2>
          <h3>{colour}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <Link name={`shop ${name}`} nameClass="product-btn" />
    </div>
  );
};

export default ProductItem;
