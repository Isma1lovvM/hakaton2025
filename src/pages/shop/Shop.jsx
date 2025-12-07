import React from "react";
import "./shop.css";

import shopBackImg from "../../assets/shopBack.svg";
import Products from "../../components/products/Products";

function Shop() {
  return (
    <div className="container">
      <div className="shopBox">
        <h2 className="shopPage">Shop Page</h2>
        <p className="miniShopPage">Let’s design the place you always imagined.</p>
      </div>
      <Products />
      <button className="shopPageBtn">Show More</button>
    </div>
  );
}

export default Shop;
