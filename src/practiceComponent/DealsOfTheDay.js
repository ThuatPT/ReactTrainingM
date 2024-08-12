import "../css/appEshop.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Nhập các biểu tượng ngôi sao từ react-icons

const DealsOfTheDay = () => {
  const products = [
    {
      id: 1,
      imgSrc: require("../assets/images/img/product01.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      isNew: true,
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 4.5, // Thêm thuộc tính đánh giá
    },
    {
      id: 2,
      imgSrc: require("../assets/images/img/product07.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 3.0, // Thêm thuộc tính đánh giá
    },
    {
      id: 3,
      imgSrc: require("../assets/images/img/product06.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      isNew: true,
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 5.0, // Thêm thuộc tính đánh giá
    },
    {
      id: 4,
      imgSrc: require("../assets/images/img/product08.jpg"),
      price: "$32.50",
      oldPrice: "$45.00",
      isNew: true,
      discount: "-20%",
      countdown: ["00 H", "00 M", "00 S"],
      rating: 2.5, // Thêm thuộc tính đánh giá
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

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">Deals Of The Day</h2>
              <div className="pull-right">
                <div className="product-slick-dots-1 custom-dots" />
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="banner banner-2">
              <img src={require("../assets/images/img/banner14.jpg")} alt="" />
              <div className="banner-caption">
                <h2 className="white-color">
                  NEW
                  <br />
                  COLLECTION
                </h2>
                <button className="primary-btn">Shop Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-sm-6 col-xs-6">
            <div className="row">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="col-md-3 col-sm-6 col-xs-6 mb-4"
                >
                  <div className="product product-single">
                    <div className="product-thumb">
                      <div className="product-label">
                        {product.isNew && <span>New</span>}
                        {product.discount && (
                          <span className="sale">{product.discount}</span>
                        )}
                      </div>
                      <ul className="product-countdown">
                        {product.countdown.map((time, index) => (
                          <li key={index}>
                            <span>{time}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="main-btn quick-view">
                        <i className="fa fa-search-plus" /> Quick view
                      </button>
                      <img src={product.imgSrc} alt="" />
                    </div>
                    <div className="product-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="product-price">
                          {product.price}{" "}
                          <del className="product-old-price">
                            {product.oldPrice}
                          </del>
                        </h3>
                        <div className="price-rating">
                          {renderStars(product.rating)}
                        </div>
                      </div>
                      <h2 className="product-name">
                        <a href="#" className="product_name">
                          Product Name Goes Here
                        </a>
                      </h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn">
                          <i className="fa fa-heart" />
                        </button>
                        <button className="main-btn icon-btn">
                          <i className="fa fa-exchange" />
                        </button>
                        <button className="primary-btn add-to-cart">
                          <i className="fa fa-shopping-cart" /> Add to Cart
                        </button>
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

export default DealsOfTheDay;
