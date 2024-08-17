import React from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";

const Home = () => (
  <div id="home">
    {/* container */}
    <Container>
      {/* home wrap */}
      <div className="home-wrap">
        {/* home slick */}
        <Carousel id="home-slick" interval={null}>
          {/* banner */}
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src={require("../assets/images/img/banner01.jpg")}
              alt="First slide"
            />
            <Carousel.Caption className="text-center">
              <h1 className="primary-color-deal">BAGS SALE</h1>
              <h3 className="white-color font-weak">Up to 50% Discount</h3>
              <button className="primary-btn">Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          {/* /banner */}
          {/* banner */}
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src={require("../assets/images/img/banner02.jpg")}
              alt="Second slide"
            />
            <Carousel.Caption className="text-center">
              <h1 className="primary-color">
                HOT DEAL
                <br />
                <span className="white-color font-weak">Up to 50% OFF</span>
              </h1>
              <button className="primary-btn">Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          {/* /banner */}
          {/* banner */}
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src={require("../assets/images/img/banner03.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption className="">
              <h1 className="white-color Collection-item">
                NEW PRODUCT <span>COLLECTION</span>
              </h1>
              <button className="primary-btn">Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          {/* /banner */}
        </Carousel>
        {/* /home slick */}
      </div>
      {/* /home wrap */}
    </Container>
    {/* /container */}
  </div>
);

export default Home;
