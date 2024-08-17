import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Nhập các biểu tượng ngôi sao từ react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";
import {
  FaHeart,
  FaExchangeAlt,
  FaShoppingCart,
  FaSearchPlus,
} from "react-icons/fa";
import "../css/appEshop.css";

const DealsOfTheDaySecond = () => {
  const product = [
    {
      id: 1,
      imgSrc: require("../assets/images/img/product01.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      isNew: false,
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 4.5,
    },
  ];
  const products = [
    {
      id: 1,
      imgSrc: require("../assets/images/img/product02.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      isNew: true,
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 4.5,
    },
    {
      id: 2,
      imgSrc: require("../assets/images/img/product07.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 3.0,
    },
    {
      id: 3,
      imgSrc: require("../assets/images/img/product06.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      isNew: true,
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 5.0,
    },
    {
      id: 4,
      imgSrc: require("../assets/images/img/product08.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      isNew: true,
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 2.5,
    },
  ];

  // Hàm để hiển thị ngôi sao dựa trên điểm đánh giá
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} color="#ffcc00" />
        ))}
        {halfStar && <FaStarHalfAlt color="#ffcc00" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} color="#ffcc00" />
        ))}
      </>
    );
  };

  // Cấu hình slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Hiển thị 3 sản phẩm
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title  fw-bold">Deals Of The Day</h2>
              <div className="pull-right">
                <div className="product-slick-dots-1 custom-dots" />
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="product product-single first-slide border-orange">
              <div className="product-thumb">
                <div className="product-label">
                  {product[0].isNew && <span>New</span>}
                  {product[0].discount && (
                    <span className="sale">{product[0].discount}</span>
                  )}
                </div>
                <ul className="product-countdown">
                  {product[0].countdown.map((time, index) => (
                    <li key={index}>
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
                <button className="main-btn quick-view">
                  <FaSearchPlus /> Quick view
                </button>
                <img src={product[0].imgSrc} className="first-img  " alt="" />
              </div>
              <div className="product-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <h3 className="product-price mb-0 h5">
                      {product[0].price}{" "}
                      <del className="product-old-price text-muted small">
                        {product[0].oldPrice}
                      </del>
                    </h3>
                  </div>
                  <div className="price-rating">
                    {renderStars(product[0].rating)}
                  </div>
                </div>

                <h2 className="product-name h6">
                  <a href="#" className="product_name text-dark">
                    Product Name Goes Here
                  </a>
                </h2>

                <div className="product-btns mt-2 d-flex">
                  <Button variant="light" className="me-2">
                    <FaHeart style={{ color: "red" }} />
                  </Button>
                  <Button variant="light" className="me-2">
                    <FaExchangeAlt style={{ color: "grey" }} />
                  </Button>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#F8694A",
                      borderColor: "#F8694A",
                    }}
                  >
                    <FaShoppingCart
                      style={{ color: "white", marginRight: "8px" }}
                    />{" "}
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-sm-6 col-xs-6">
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product.id} className="product product-single">
                  <div className="product-thumb">
                    <div className="product-label">
                      {product.isNew && <span>New</span>}
                      {product.discount && (
                        <span className="sale">{product.discount}</span>
                      )}
                    </div>

                    <button className="main-btn quick-view">
                      <FaSearchPlus /> Quick view
                    </button>
                    <img src={product.imgSrc} alt="" />
                  </div>
                  <div className="product-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <h3 className="product-price mb-0 h5">
                          {product.price}{" "}
                          <del className="product-old-price text-muted small">
                            {product.oldPrice}
                          </del>
                        </h3>
                      </div>
                      <div className="price-rating">
                        {renderStars(product.rating)}
                      </div>
                    </div>

                    <h2 className="product-name h6">
                      <a href="#" className="product_name text-dark">
                        Product Name Goes Here
                      </a>
                    </h2>

                    <div className="product-btns mt-2 d-flex">
                      <Button variant="light" className="me-2">
                        <FaHeart style={{ color: "red" }} />
                      </Button>
                      <Button variant="light" className="me-2">
                        <FaExchangeAlt style={{ color: "grey" }} />
                      </Button>
                      <Button
                        variant="primary"
                        style={{
                          backgroundColor: "#F8694A",
                          borderColor: "#F8694A",
                        }}
                      >
                        <FaShoppingCart
                          style={{ color: "white", marginRight: "8px" }}
                        />{" "}
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* v2  */}
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDaySecond;
