import React from "react";
import "./category.css";

import { NavLink } from "react-router-dom";
import cart1Img from "../../assets/cart.svg";
import cart2Img from "../../assets/cart2.svg";
import cart3Img from "../../assets/cart3.svg";
import { FaArrowRight } from "react-icons/fa6";

function Category() {
  return (
    <div className="container">
      <div className="imgsBox">
        <div className="cart1">
          <div className="btns">
            <h3>Living Room</h3>
            <button>
              <NavLink to={"/shop"}>
                Shop Now <FaArrowRight />
              </NavLink>
            </button>
          </div>
          <img className="big" src={cart1Img} alt="" />
        </div>

        <div className="twiceImgsBox">
          <div className="cart2">
            <div className="btns2">
              <h3>Bedroom</h3>
              <button>
                <NavLink to={"/shop"}>
                  Shop Now <FaArrowRight />
                </NavLink>
              </button>
            </div>
            <img className="imgg" src={cart2Img} alt="" />
          </div>

          <div className="cart2">
            <div className="btns3">
              <h3>Kitchen</h3>
              <button>
                <NavLink to={"/shop"}>
                  Shop Now <FaArrowRight />
                </NavLink>
              </button>
            </div>
            <img className="imgg" src={cart3Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
