import React from "react";
import Button from "./Button";

const ClarksJamaicanCollection = () => {
  return (
    <section className="mainbody__collection">
      <div className="mainbody__wrapper">
        <h2 className="mainbody__collection-title">
          clarks and jamaica: a collection <br />
          inspired by the island
        </h2>
        <div className="mainbody__collection-text">
          <p>
            Since they first hit the street of Kingston, our profile have
            occupied a special place in Jamaican culture
          </p>
          <p>
            To celebrate this truly original connection, we've crafted a
            limited-edition new collection
          </p>
        </div>
        <div className="mainbody__collection-btn-container">
          <Button name="shop mens" classValue="collection-shop-btn" />
          <Button name="shop womens" classValue="collection-shop-btn" />
        </div>
      </div>
    </section>
  );
};

export default ClarksJamaicanCollection;
