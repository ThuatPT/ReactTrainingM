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
} from "react-bootstrap";
import {
  FaUserCircle,
  FaShoppingCart,
  FaSearch,
  FaTrash,
  FaArrowRight,
} from "react-icons/fa"; // Thêm FaArrowRight vào đây
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <>
      {/* top Header */}
      <div id="top-header" className="bg-light py-2">
        <Container>
          <Navbar className="justify-content-between">
            <span>Welcome to E-shop!</span>
            <Nav>
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
          </Navbar>
        </Container>
      </div>
      {/* /top Header */}

      {/* header */}
      <div id="header" className="py-3 bg-white shadow-sm">
        <Container>
          <Navbar className="justify-content-between">
            {/* Logo */}
            <Navbar.Brand href="#">
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17I_nNotTG9CiWE-EmwQNz0dJOSL_mgsyHQ&s"
                src={logo}
                alt="Logo"
                height="80"
              />
            </Navbar.Brand>
            {/* /Logo */}

            {/* Search */}
            <Form inline className="d-flex">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Enter your keyword"
                  className="mr-sm-2"
                />
                <Form.Select>
                  <option value={0}>All Categories</option>
                  <option value={1}>Category 01</option>
                  <option value={2}>Category 02</option>
                </Form.Select>
                <Button variant="outline-primary">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
            {/* /Search */}

            <Nav>
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
                <Dropdown.Menu
                  align="end"
                  className="p-4 bg-white shadow-lg rounded-lg"
                >
                  <div id="shopping-cart">
                    <div className="flex items-center justify-between mb-3">
                      <img
                        src="./img/thumb-product01.jpg"
                        alt=""
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div className="flex-1 ml-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          $32.50{" "}
                          <span className="text-sm font-normal text-gray-600">
                            x3
                          </span>
                        </h3>
                        <h5 className="text-sm font-medium text-gray-600">
                          <a href="#" className="text-blue-500 hover:underline">
                            Product Name Goes Here
                          </a>
                        </h5>
                      </div>
                      <Button variant="danger" size="sm" className="p-2">
                        <FaTrash />
                      </Button>
                    </div>
                    <div className="flex justify-between mt-4">
                      <Button variant="outline-primary" className="w-full mr-2">
                        View Cart
                      </Button>
                      <Button variant="primary" className="w-full">
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
