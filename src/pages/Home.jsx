import { Helmet } from "react-helmet-async";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ListingCategories from "./../components/ListingCategories/ListingCategories";
import CraftItem from "../components/CraftItem/CraftItem";
import AIChat from "../components/AIChat/AIChat";
import AnimatedNumber from "./../components/AnimatedNumber/AnimatedNumber";
import ClientReview from "../components/ClientReview/ClientReview";
import { useEffect } from "react";

const Home = () => {
  //  ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Textile Art | Home</title>
      </Helmet>
      <HeroSlider />
      <ListingCategories />
      <CraftItem />
      <AnimatedNumber />
      <ClientReview />
      <AIChat />
    </div>
  );
};

export default Home;