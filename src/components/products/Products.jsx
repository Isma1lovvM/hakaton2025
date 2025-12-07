import React, { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import "./products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://68d6bbe4c2a1754b426bbe49.mockapi.io/app/v1/product`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProductsData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const renderProducts = (products) => {
    return products?.map((product, index) => (
      // <SwiperSlide key={product.id}>
      <ProductItem
        key={product.id}
        title={product.title}
        price={product.price}
        id={product.id}
        image={product.img}
        index={index}
      />
      // </SwiperSlide>
    ));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="container">
        <div className="swiperBox">
          {/* <Swiper
                    className="swiperBox"
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={24}
                    slidesPerView={4}
                    navigation
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ type: "progressbar" }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                > */}
          {renderProducts(productsData)}
          {/* </Swiper> */}
        </div>
      </div>
    </>
  );
}

export default Products;
