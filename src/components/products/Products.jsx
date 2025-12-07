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
    fetch(`https://68c810475d8d9f51473427eb.mockapi.io/3legant/products`)
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
        rating={product.rating}
        title={product.title}
        category={product.category}
        price={product.price}
        description={product.description}
        oldPrice={product.oldPrice}
        id={product.id}
        image={product.image}
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
