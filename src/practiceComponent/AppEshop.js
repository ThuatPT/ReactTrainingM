import CollectionCard from "./CollectionCard";
import DealsOfTheDay from "./DealsOfTheDay";
import DealsOfTheDaySecond from "./DealsOfTheDaySecond";
import FeaturedCategories from "./FeaturedCategories";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import LatestProducts from "./LatestProducts";
import Navigation from "./Navigation";
import PickedForYou from "./PickedForYou";

const AppEshop = () => {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <Home />
      </div>
      <FeaturedCategories />
      <DealsOfTheDay />
      <DealsOfTheDaySecond />
      <CollectionCard />
      <LatestProducts />
      <PickedForYou />
      <Footer />
    </div>
  );
};
export default AppEshop;
