import React from "react";
import ClarksJamaicanCollection from "./ClarksJamaicanCollection";
import ClarksOriginalimageBanner from "./ClarksOriginalimageBanner";
import Products from "./Products";
import VideoBanner from "./VideoBanner";

export const Body = () => {
  return (
    <div id="mainbody">
      <main className="mainbody__container">
        <VideoBanner />
        <ClarksJamaicanCollection />
        <ClarksOriginalimageBanner />
        <Products />
      </main>
    </div>
  );
};

export default Body;
