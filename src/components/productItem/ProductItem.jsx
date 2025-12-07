import React from "react";
import "./productItem.css";

import newImg from "../../assets/new.svg";
import sale50 from "../../assets/sale50.svg";
import like from "../../assets/like.svg";
import { NavLink } from "react-router-dom";

function ProductItem({
  id,
  oldPrice,
  category,
  rating,
  image,
  description,
  price,
  title,
  index,
}) {
  const animations = [
    "flip-left",
    "flip-left",
    "flip-right",
    "flip-right",
    "fade-right",
    "fade-right",
    "fade-left",
    "fade-left",
    "fade-up-right",
    "fade-up-right",
    "fade-up-left",
    "fade-up-left",
  ];
  const chosenAnimation = animations[index % animations.length]; // har bir cart uchun boshqacha animatsiya

  return (
    <div className="swiperBoxCart" data-aos={chosenAnimation}>
      <NavLink style={{ width: "100%" }} to={`/singlepage/${id}`}>
        <div className="swiperCart">
          <div className="flex">
            <div className="imgsSaleBox">
              <img src={newImg} alt="" />
              <img src={sale50} alt="" />
            </div>
            <img className="like" src={like} alt="" />
          </div>

          <img className="hehe" src={image[0]} alt="" />
          <button className="hoverBtn">Add to Cart</button>
        </div>
        <div className="swiperText">
          <img src={rating} alt="" />
          <h3 className="title">{title}</h3>
          <p className="swiperSpan">
            <span className="title">{price}сум</span>
            <span className="line">{oldPrice}</span>
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductItem;
