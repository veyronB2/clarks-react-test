import React from "react";

const Button = ({ name, classValue }) => {
  return (
    <a className={`btn ${classValue}`} href="#">
      {name}
    </a>
  );
};

export default Button;
