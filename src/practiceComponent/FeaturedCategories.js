const FeaturedCategories = () => {
  return (
    <>
      <div className="section ">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* banner */}
            <div className="col-md-4 col-sm-6">
              <a className="banner banner-1" href="#">
                <img
                  src={require("../assets/images/./categories/banner10.jpg")}
                  alt=""
                />
                <div className="banner-caption text-center">
                  <h2 className="white-color">NEW COLLECTION</h2>
                </div>
              </a>
            </div>
            {/* /banner */}
            {/* banner */}
            <div className="col-md-4 col-sm-6">
              <a className="banner banner-1" href="#">
                <img
                  src={require("../assets/images/./categories/banner11.jpg")}
                  alt=""
                />
                <div className="banner-caption text-center">
                  <h2 className="white-color">NEW COLLECTION</h2>
                </div>
              </a>
            </div>
            {/* /banner */}
            {/* banner */}
            <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
              <a className="banner banner-1" href="#">
                <img
                  src={require("../assets/images/./categories/banner12.jpg")}
                  alt=""
                />
                <div className="banner-caption text-center">
                  <h2 className="white-color">NEW COLLECTION</h2>
                </div>
              </a>
            </div>
            {/* /banner */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
    </>
  );
};
export default FeaturedCategories;
