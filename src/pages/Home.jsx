import { Helmet } from "react-helmet-async";
import HeroSlider from "../components/HeroSlider/HeroSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Textile Art | Home</title>
      </Helmet>
      <HeroSlider />
    </div>
  );
};

export default Home;
