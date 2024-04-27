import { Helmet } from "react-helmet-async";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ListingCategories from "./../components/ListingCategories/ListingCategories";
import CraftItem from "../components/CraftItem/CraftItem";
import AIChat from "../components/AIChat/AIChat";
import AnimatedNumber from "./../components/AnimatedNumber/AnimatedNumber";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Textile Art | Home</title>
      </Helmet>
      <HeroSlider />
      <ListingCategories />
      <CraftItem />
      <AnimatedNumber />
      <AIChat />
    </div>
  );
};

export default Home;
