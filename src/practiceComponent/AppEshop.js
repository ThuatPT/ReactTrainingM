import FeaturedCategories from "./FeaturedCategories";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";

const AppEshop = () => {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <Home />
      </div>

      <FeaturedCategories />
    </div>
  );
};
export default AppEshop;
