import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Button } from "react-bootstrap";
import {
  FaHeart,
  FaExchangeAlt,
  FaShoppingCart,
  FaSearchPlus,
} from "react-icons/fa";
import "../css/appEshop.css";

const PickedForYou = () => {
  const products = [
    {
      id: 1,
      imgSrc: require("../assets/images/img/product04.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      isNew: false,
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 4.5,
    },
    {
      id: 2,
      imgSrc: require("../assets/images/img/product02.jpg"),
      price: "$28.00",
      oldPrice: "$35.00",
      isNew: true,
      discount: "-10%",
      countdown: ["12 H", "25 M", "50 S"],
      rating: 4.0,
    },
    {
      id: 3,
      imgSrc: require("../assets/images/img/product03.jpg"),
      price: "$45.00",
      oldPrice: "$60.00",
      isNew: true,
      discount: "-15%",
      countdown: ["05 H", "10 M", "30 S"],
      rating: 4.8,
    },
    {
      id: 4,
      imgSrc: require("../assets/images/img/product01.jpg"),
      price: "$22.00",
      oldPrice: "$30.00",
      isNew: false,
      discount: "-25%",
      countdown: ["08 H", "05 M", "15 S"],
      rating: 3.5,
    },
    // Các sản phẩm mẫu cho hàng thứ hai
    {
      id: 5,
      imgSrc: require("../assets/images/img/product05.jpg"),
      price: "$50.00",
      oldPrice: "$70.00",
      isNew: true,
      discount: "-20%",
      countdown: ["10 H", "20 M", "40 S"],
      rating: 4.7,
    },
    {
      id: 6,
      imgSrc: require("../assets/images/img/product06.jpg"),
      price: "$30.00",
      oldPrice: "$40.00",
      isNew: false,
      discount: "-15%",
      countdown: ["15 H", "10 M", "25 S"],
      rating: 4.2,
    },
    {
      id: 7,
      imgSrc: require("../assets/images/img/product07.jpg"),
      price: "$40.00",
      oldPrice: "$55.00",
      isNew: false,
      discount: "-10%",
      countdown: ["20 H", "30 M", "50 S"],
      rating: 3.8,
    },
    {
      id: 8,
      imgSrc: require("../assets/images/img/product08.jpg"),
      price: "$35.00",
      oldPrice: "$45.00",
      isNew: true,
      discount: "-20%",
      countdown: ["18 H", "15 M", "35 S"],
      rating: 4.4,
    },
  ];

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

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title fw-bold">Latest Products</h2>
            </div>
          </div>

          {/* Hàng đầu tiên với 4 sản phẩm */}
          <div className="col-md-12">
            <div className="row">
              {products.slice(0, 4).map((product) => (
                <div key={product.id} className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickedForYou;
