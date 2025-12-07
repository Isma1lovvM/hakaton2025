import React from "react";
import "./articles.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import img from "../../assets/img.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";

function Articles() {
  return (
    <div>
      <div className="articleBox">
        <div className="articleCart">
          <img src={img} alt="" />
          <h3>7 ways to decor your home </h3>
          <button className="blckBtn">
            <NavLink to={"/shop"}>
              Read More
              <FaArrowRight />
            </NavLink>
          </button>
        </div>
        <div className="articleCart">
          <img src={img2} alt="" />
          <h3>Kitchen organization</h3>
          <button className="blckBtn">
            <NavLink to={"/shop"}>
              Read More
              <FaArrowRight />
            </NavLink>
          </button>
        </div>
        <div className="articleCart">
          <img src={img3} alt="" />
          <h3>Decor your bedroom</h3>
          <button className="blckBtn">
            <NavLink to={"/shop"}>
              Read More
              <FaArrowRight />
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
