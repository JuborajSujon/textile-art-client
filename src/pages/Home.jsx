import { Helmet } from "react-helmet-async";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ListingCategories from "./../components/ListingCategories/ListingCategories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Textile Art | Home</title>
      </Helmet>
      <HeroSlider />
      <ListingCategories />
    </div>
  );
};

export default Home;
