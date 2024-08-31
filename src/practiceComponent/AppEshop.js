import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

import { useDarkMode } from "../utils/DarkModeContext";
import CollectionCard from "./CollectionCard";
import DealsOfTheDay from "./DealsOfTheDay";
import DealsOfTheDaySecond from "./DealsOfTheDaySecond";
import FeaturedCategories from "./FeaturedCategories";
import Home from "./Home";
import LatestProducts from "./LatestProducts";
import PickedForYou from "./PickedForYou";
import "../css/dark-mode.css";
const AppEshop = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
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
