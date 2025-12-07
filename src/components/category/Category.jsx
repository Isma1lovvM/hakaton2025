import React from "react";
import "./category.css";

import { NavLink } from "react-router-dom";
import cart1Img from "../../assets/animalss.jpg";
import cat from "../../assets/cat.jpg"
import gogg2 from "../../assets/dog1.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { color } from "framer-motion";

function Category() {
  return (
    <div className="container">
      <div className="imgsBox">
        <div className="cart1">
          <div className="btns">
            <h3> <span className="spann">Animals</span></h3>
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
              <h3>Cats</h3>
              <button>
                <NavLink to={"/shop"}>
                  Shop Now <FaArrowRight />
                </NavLink>
              </button>
            </div>
            <img className="imgg" src={cat} alt="" />
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
