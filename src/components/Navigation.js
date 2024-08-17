import React from "react";
import { Nav, NavDropdown, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Đảm bảo rằng bạn đã import bootstrap CSS
import { FaList } from "react-icons/fa"; // Import icon từ react-icons
import "../css/appEshop.css";
const categories = [
  "Women’s Clothing",
  "Men’s Clothing",
  "Phones & Accessories",
  "Jewelry & Watches",
  "Bags & Shoes",
  "View All",
  "Phones & Accessories",
  "Computer & Office",
  "Home & Garden",
  "Sports & Outdoors",
  "Toys & Games",
  "Health & Beauty",
  "Automotive",
];

const Navigation = () => (
  <div id="navigation">
    <Container>
      <div id="responsive-nav">
        {/* Category Navigation */}
        <Nav className="category-nav flex-column border rounded mb-4">
          <Nav.Item>
            <Nav.Link
              href="#"
              className="category-header d-flex justify-content-between align-items-center text-white"
            >
              <span>Categories</span> {/* Căn chữ sang trái */}
              <FaList /> {/* Căn icon sang phải */}
            </Nav.Link>
          </Nav.Item>
          {categories.map((category, index) => (
            <NavDropdown
              key={index}
              title={category}
              className="border-bottom"
              id={`category-dropdown-${index}`}
            >
              <div className="custom-menu">
                <Row>
                  {Array(3)
                    .fill()
                    .map((_, i) => (
                      <Col md={4} key={i}>
                        <Nav className="list-links">
                          <h3 className="list-links-title">Categories</h3>
                          {categories.map((cat, j) => (
                            <Nav.Link href="#" key={j}>
                              {cat}
                            </Nav.Link>
                          ))}
                        </Nav>
                        <hr className="hidden-md hidden-lg" />
                      </Col>
                    ))}
                </Row>
                <Row className="hidden-sm hidden-xs">
                  <Col md={12}>
                    <a className="banner banner-1" href="#">
                      <Image src="./img/banner05.jpg" alt="Banner" fluid />
                      <div className="banner-caption text-center">
                        <h2 className="white-color">NEW COLLECTION</h2>
                        <h3 className="white-color font-weak">HOT DEAL</h3>
                      </div>
                    </a>
                  </Col>
                </Row>
              </div>
            </NavDropdown>
          ))}
        </Nav>
        {/* /Category Navigation */}
        {/* Menu Navigation */}

        <Nav className="menu-nav flex py-2 nav-top-item">
          <Nav.Item>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Shop</Nav.Link>
          </Nav.Item>
          <NavDropdown title="Women" id="women-dropdown">
            <div className="custom-menu">
              <Row>
                {Array(3)
                  .fill()
                  .map((_, i) => (
                    <Col md={4} key={i}>
                      <Nav className="list-links">
                        <h3 className="list-links-title">Categories</h3>
                        {categories.map((cat, j) => (
                          <Nav.Link href="#" key={j}>
                            {cat}
                          </Nav.Link>
                        ))}
                      </Nav>
                    </Col>
                  ))}
              </Row>
              <Row className="hidden-sm hidden-xs">
                <Col md={12}>
                  <a className="banner banner-1" href="#">
                    <Image src="./img/banner05.jpg" alt="Banner" fluid />
                    <div className="banner-caption text-center">
                      <h2 className="white-color">NEW COLLECTION</h2>
                      <h3 className="white-color font-weak">HOT DEAL</h3>
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </NavDropdown>
          <NavDropdown title="Men" id="men-dropdown">
            <div className="custom-menu">
              <Row>
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <Col md={3} key={i}>
                      <a className="banner banner-1" href="#">
                        <Image
                          src={`./img/banner0${i + 6}.jpg`}
                          alt={`Banner ${i + 1}`}
                          fluid
                        />
                        <div className="banner-caption text-center">
                          <h3 className="white-color text-uppercase">
                            {["Women’s", "Men’s", "Accessories", "Bags"][i]}
                          </h3>
                        </div>
                      </a>
                      <hr />
                      <Nav className="list-links">
                        <h3 className="list-links-title">Categories</h3>
                        {categories.map((cat, j) => (
                          <Nav.Link
                            href="#"
                            className="text-white-item"
                            key={j}
                          >
                            {cat}
                          </Nav.Link>
                        ))}
                      </Nav>
                    </Col>
                  ))}
              </Row>
            </div>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link href="#">Sales</Nav.Link>
          </Nav.Item>
          <NavDropdown title="Pages" id="pages-dropdown">
            <NavDropdown.Item href="index.html">Home</NavDropdown.Item>
            <NavDropdown.Item href="products.html">Products</NavDropdown.Item>
            <NavDropdown.Item href="product-page.html">
              Product Details
            </NavDropdown.Item>
            <NavDropdown.Item href="checkout.html">Checkout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* /Menu Navigation */}
      </div>
    </Container>
  </div>
);

export default Navigation;
