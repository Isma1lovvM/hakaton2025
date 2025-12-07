import React from "react";
import "./category.css";

import { NavLink } from "react-router-dom";
import cart1Img from "../../assets/kuchu.jpg";
import dogg1 from "../../assets/dog1.jpg"
import gogg2 from "../../assets/dog2.jpg"
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
              <h3>Animals</h3>
              <button>
                <NavLink to={"/shop"}>
                  Shop Now <FaArrowRight />
                </NavLink>
              </button>
            </div>
            <img className="imgg" src={dogg1} alt="" />
          </div>

          <div className="cart2">
            <div className="btns3">
              <h3>Puppies</h3>
              <button>
                <NavLink to={"/shop"}>
                  Shop Now <FaArrowRight />
                </NavLink>
              </button>
            </div>
            <img className="imgg" src={gogg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
