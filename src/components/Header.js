import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Form,
  Button,
  NavDropdown,
  InputGroup,
  Image,
} from "react-bootstrap";
import {
  FaUserCircle,
  FaShoppingCart,
  FaSearch,
  FaTrash,
  FaArrowRight,
} from "react-icons/fa";
import "../css/header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      {/* top Header */}
      <div id="top-header" className="bg-light ">
        <Container>
          <Navbar expand="lg" className="justify-content-between">
            <span>Welcome to E-shop!</span>
            <Navbar.Toggle aria-controls="top-navbar-nav" />
            <Navbar.Collapse
              id="top-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="ml-auto">
                <Nav.Link href="#">Store</Nav.Link>
                <Nav.Link href="#">Newsletter</Nav.Link>
                <Nav.Link href="#">FAQ</Nav.Link>
                <NavDropdown title="ENG" id="language-dropdown">
                  <NavDropdown.Item href="#">English (ENG)</NavDropdown.Item>
                  <NavDropdown.Item href="#">Russian (Ru)</NavDropdown.Item>
                  <NavDropdown.Item href="#">French (FR)</NavDropdown.Item>
                  <NavDropdown.Item href="#">Spanish (Es)</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="USD" id="currency-dropdown">
                  <NavDropdown.Item href="#">USD ($)</NavDropdown.Item>
                  <NavDropdown.Item href="#">EUR (€)</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      {/* /top Header */}

      {/* header */}
      <div id="header" className="py-3 bg-white shadow-sm">
        <Container>
          <Navbar expand="lg" className="justify-content-between">
            {/* Logo */}
            <Navbar.Brand href="#">
              <img src={logo} alt="Logo" height="80" />
            </Navbar.Brand>
            {/* /Logo */}

            {/* Search */}
            <Form inline className="d-flex">
              <InputGroup>
                <Form.Select aria-label="Category select">
                  <option value={0}>All Categories</option>
                  <option value={1}>Category 01</option>
                  <option value={2}>Category 02</option>
                </Form.Select>
                <Form.Control
                  type="text"
                  placeholder="Enter your keyword"
                  className="mr-sm-2"
                />
                <Button variant="outline-primary">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
            {/* /Search */}

            <Nav className="ml-auto">
              {/* Account */}
              <Dropdown as={Nav.Item} className="mr-3">
                <Dropdown.Toggle as={Nav.Link}>
                  <FaUserCircle /> My Account
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                  <Dropdown.Item href="#">My Account</Dropdown.Item>
                  <Dropdown.Item href="#">My Wishlist</Dropdown.Item>
                  <Dropdown.Item href="#">Compare</Dropdown.Item>
                  <Dropdown.Item href="#">Checkout</Dropdown.Item>
                  <Dropdown.Item href="#">Login</Dropdown.Item>
                  <Dropdown.Item href="#">Create An Account</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* /Account */}

              {/* Cart */}
              <Dropdown as={Nav.Item} className="mr-3">
                <Dropdown.Toggle as={Nav.Link}>
                  <FaShoppingCart />
                  <span className="badge badge-danger">3</span> My Cart: $35.20
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="shopping-cart-menu">
                  <div id="shopping-cart">
                    {/* Product Item */}
                    <div className="cart-item">
                      <img
                        src={require("../assets/images/img/product07.jpg")}
                        alt=""
                        className="cart-item-image"
                      />
                      <div className="cart-item-details">
                        <h5 className="cart-item-price">
                          $32.50 <span className="cart-item-quantity">x3</span>
                        </h5>
                        <a href="#" className="cart-item-name">
                          Product Name Goes Here
                        </a>
                      </div>
                      <Button
                        variant="danger"
                        size="sm"
                        className="cart-item-remove-btn"
                      >
                        <FaTrash />
                      </Button>
                    </div>

                    {/* Buttons */}
                    <div className="cart-actions">
                      <Button
                        variant="outline-primary"
                        className="cart-view-btn"
                      >
                        View Cart
                      </Button>
                      <Button variant="primary" className="cart-checkout-btn">
                        Checkout <FaArrowRight className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              {/* /Cart */}
            </Nav>
          </Navbar>
        </Container>
      </div>
      {/* /header */}
    </>
  );
};

export default Header;
