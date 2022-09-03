import React from "react";

const Button = ({ name }) => {
  return (
    <a className="btn collection-shop-btn" href="#">
      {name}
    </a>
  );
};

export default Button;
