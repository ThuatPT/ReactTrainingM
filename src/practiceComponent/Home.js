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
              src="https://cdn.fastcare.vn/uploads/2024/05/banner-mainslide-fastcare-he-toi-roi-ep-kinh-thay-man-iphone-657x368.jpg?w=828&q=70"
              alt="First slide"
            />
            <Carousel.Caption className="text-center">
              <h1>Bags sale</h1>
              <h3 className="white-color font-weak">Up to 50% Discount</h3>
              <Button variant="primary" className="primary-btn">
                Shop Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          {/* /banner */}
          {/* banner */}
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src="https://cdn.fastcare.vn/uploads/2024/05/banner-mainslide-fastcare-he-toi-roi-sua-tot-gia-tot-657x368.jpg?w=828&q=70"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="primary-color">
                HOT DEAL
                <br />
                <span className="white-color font-weak">Up to 50% OFF</span>
              </h1>
              <Button variant="primary" className="primary-btn">
                Shop Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          {/* /banner */}
          {/* banner */}
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src="https://cdn.fastcare.vn/uploads/2024/05/banner-mainslide-fastcare-he-toi-roi-sua-laptop-thay-ram-657x368.jpg?w=828&q=70"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 className="white-color">
                New Product <span>Collection</span>
              </h1>
              <Button variant="primary" className="primary-btn">
                Shop Now
              </Button>
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
