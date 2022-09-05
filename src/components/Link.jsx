import React from "react";

const Link = ({ name, nameClass }) => {
  return (
    <a className={`btn ${nameClass}`} href="#">
      {name}
    </a>
  );
};

export default Link;
