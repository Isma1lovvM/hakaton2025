import React, { useEffect, useState } from "react";
import "./SinglePage.css";
import { useParams } from "react-router-dom";

import newImg from "../../assets/new.svg";
import sale50 from "../../assets/sale50.svg";
import { MdOutlineMail } from "react-icons/md";
import swiperImg1 from "../../assets/swiper1.svg";
import swiperImg2 from "../../assets/swiper2.svg";
import swiperImg3 from "../../assets/swiper3.svg";

function SinglePage() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [mainImg1, setMainImg1] = useState(null);
  const [mainImg2, setMainImg2] = useState(null);

  useEffect(() => {
    fetch(`https://68c810475d8d9f51473427eb.mockapi.io/3legant/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setMainImg(res.image[0]);
        setMainImg1(res.image[1]);
        setMainImg2(res.image[2]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section className="section">
      <div className="container">
        <div className="productContainer">
          <div className="productCenter">
            <div className="leftContainer">
              <div className="productLeft">
                <div className="productLeftBox">
                  <img src={newImg} alt="" />
                  <img src={sale50} alt="" />
                </div>
                <img
                  className="productLeftImg"
                  src={mainImg}
                  alt="Main product"
                />
              </div>

              <div className="swiperImgs">
                <img
                  src={mainImg}
                  alt="thumb1"
                  onClick={() => setMainImg(mainImg)}
                />
                <img
                  src={mainImg1}
                  alt="thumb2"
                  onClick={() => setMainImg1(mainImg1)}
                />
                <img
                  src={mainImg2}
                  alt="thumb3"
                  onClick={() => setMainImg2(mainImg2)}
                />
              </div>
            </div>

            <div className="productRightContainer">
              <div className="productRight">
                <img src={data?.rating[0]} alt="" />
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
                <span>
                  <p className="wn">{data?.price}сум</p>
                  <p className="nw">{data?.oldPrice}</p>
                </span>
              </div>
              <div className="productRightTexts">
                <p>Offer expires in:</p>
                <ul className="productTextsList">
                  <li>
                    <div className="hourCart">
                      <p>02</p>
                    </div>
                    <span>Days</span>
                  </li>
                  <li>
                    <div className="hourCart">
                      <p>12</p>
                    </div>
                    <span>Hours</span>
                  </li>
                  <li>
                    <div className="hourCart">
                      <p>45</p>
                    </div>
                    <span>Minutes</span>
                  </li>
                  <li>
                    <div className="hourCart">
                      <p>05</p>
                    </div>
                    <span>Seconds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
