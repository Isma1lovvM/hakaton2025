import React from "react";
import "./aboutUs.css";

import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
// import image from "../../assets/image.svg";
import fet from "../../assets/zoo_fet.jpg"

function AboutUs() {
  return (
    <div className="container">
      <div className="saleBoxList1 grayy">
        <img className="imge" src={fet} alt="" />
        <div data-aos="flip-up" className="text1">
          <span>About Us</span>
          <p>
          3legant is a cat & dog gifts and themed decorations store based in Tashkent, Uzbekistan. Est since 2019.
            <br /> Simply Animal / Simply Better
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
