import React from "react";
import "./aboutUs.css";

import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import image from "../../assets/image.svg";

function AboutUs() {
  return (
    <div className="container">
      <div className="saleBoxList1 grayy">
        <img className="imge" src={image} alt="" />
        <div data-aos="flip-up" className="text1">
          <span>About Us</span>
          <p>
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019.
            <br /> Our customer service is always prepared to support you 24/7
          </p>

          <button>
            <NavLink to={"/shop"}>
              Shop Now <FaArrowRight />
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
