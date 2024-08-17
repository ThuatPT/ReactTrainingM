import React from "react";
import "../css/appEshop.css";
function CollectionCard() {
  return (
    <div>
      <div className="section section-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="banner banner-1">
                <img
                  src={require("../assets/images/img/banner13.jpg")}
                  alt="Hot Deal"
                />
                <div className="banner-caption text-center">
                  <h1 className="primary-color">
                    HOT DEAL
                    <br />
                    <span className="white-color font-weak">Up to 50% OFF</span>
                  </h1>
                  <button className="primary-btn">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column">
              <a className="banner banner-1 mb-2" href="#">
                <img
                  src={require("../assets/images/img/banner11.jpg")}
                  alt="New Collection"
                />
                <div className="banner-caption text-center">
                  <h2 className="white-color">NEW COLLECTION</h2>
                </div>
              </a>
              <a className="banner banner-1" href="#">
                <img
                  src={require("../assets/images/img/banner12.jpg")}
                  alt="New Collection"
                />
                <div className="banner-caption text-center">
                  <h2 className="white-color">NEW COLLECTION</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
