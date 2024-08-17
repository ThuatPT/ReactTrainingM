import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
  FaHeart,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer id="footer" className="section section-grey">
      <div className="container">
        <div className="row">
          {/* Footer Widget 1 */}
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer">
              {/* Footer Logo */}
              <div className="footer-logo">
                <a className="logo" href="#">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              {/* /Footer Logo */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              {/* Footer Social */}
              <ul className="footer-social list-unstyled d-flex">
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGooglePlusG />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterestP />
                  </a>
                </li>
              </ul>
              {/* /Footer Social */}
            </div>
          </div>
          {/* /Footer Widget 1 */}

          {/* Footer Widget 2 */}
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer">
              <h3 className="footer-header">My Account</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Compare</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
          {/* /Footer Widget 2 */}

          {/* Footer Widget 3 */}
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer">
              <h3 className="footer-header">Customer Service</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Shipping & Return</a>
                </li>
                <li>
                  <a href="#">Shipping Guide</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          {/* /Footer Widget 3 */}

          {/* Footer Widget 4 */}
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer">
              <h3 className="footer-header">Stay Connected</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
              <form>
                <div className="form-group my-3">
                  <input
                    className="input-item"
                    placeholder="Enter Email Address"
                  />
                </div>
                <button className="custom-button">Join Newsletter</button>
              </form>
            </div>
          </div>
          {/* /Footer Widget 4 */}
        </div>
        {/* /Row */}
        <hr />
        <div className="row">
          <div className="col-md-12 col-md-offset-2 text-center">
            {/* Footer Copyright */}
            <div className="footer-copyright">
              Copyright © All rights reserved | This template is made with{" "}
              <FaHeart aria-hidden="true" /> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>
            </div>
            {/* /Footer Copyright */}
          </div>
        </div>
        {/* /Row */}
      </div>
      {/* /Container */}
    </footer>
  );
}

export default Footer;
