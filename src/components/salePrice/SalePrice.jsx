import React from "react";
import "./SalePrice.css";

import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import fet from "../../assets/zoo_fet.jpg";
function SalePrice() {
  return (
    <section>
      <div className="saleBoxList grayy">
        <img className="imge" src={fet} alt="" />
        <div className="text">
          <span>SALE UP TO 35% OFF</span>
          <h2>HUNDREDS of New lower prices!</h2>
          <p>
          3legant is a cat & dog gifts and themed decorations store based in Tashkent, Uzbekistan. Est since 2019.

          </p>

          <button>
            <NavLink to={"/shop"}>
              Shop Now <FaArrowRight />
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SalePrice;
