import React from "react";
import Button from "../components/Button";

const ProductItem = ({ image, name, colour, desc }) => {
  return (
    <div className="mainbody__product-item">
      <div className="product-img">
        <img src={image} alt={name} />
        <div className="product-text">
          <h2>{name}</h2>
          <h4>{colour}</h4>
          <p>{desc}</p>
        </div>
      </div>
      <Button name={`shop ${name}`} />
    </div>
  );
};

export default ProductItem;
