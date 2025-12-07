import React from "react";
import "./home.css";

import swiperImg from "../../assets/swiper.svg";
import swiperImg2 from "../../assets/divan.jpg";
import swiperImg3 from "../../assets/soft.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";
import like from "../../assets/like.svg";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
import SimplyUnique from "../../components/simpyUnique/SimplyUnique";
import Category from "../../components/category/Category";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import Support from "../../components/support/Support";
import SalePrice from "../../components/salePrice/SalePrice";
import Articles from "../../components/articles/Articles";
// import { FaInstagram } from "react-icons/fa";
// import { FiFacebook } from "react-icons/fi";
// import { TbBrandYoutube } from "react-icons/tb";

function Home() {
  return (
    <main>
      <HomeSwiper />
      <SimplyUnique />
      <Category />
      <NewArrivals />
      <Support />
      <SalePrice />
      {/* <Articles/> */}
      {/* <div className="container">
        <section>
          <div className="articleList">
            <div className="textList">
              <h2>Articles</h2>
              <button className="blckBtn">
                <NavLink to={"/shop"}>
                  More Articles
                  <FaArrowRight />
                </NavLink>
              </button>
            </div> */}
{/* 
      <section className="one">
        <h2>Join Our Newsletter</h2>
        <p>Sign up for deals, new products and promotions</p>
        <form action="">
          <MdOutlineMail className="size" />
          <input type="text" className="input" placeholder="Email address" />

          <button className="sgnup">SignUp</button>
        </form>
      </section>   */}
    </main>
  );
}

export default Home;

// <section className="one">
//   <h2>Join Our Newsletter</h2>
//   <p>Sign up for deals, new products and promotions</p>
//   <form action="">
//     <MdOutlineMail className="size" />
//     <input type="text" className="input" placeholder="Email address" />
//     <button className="sgnup">SignUp</button>
//   </form>
// </section>
