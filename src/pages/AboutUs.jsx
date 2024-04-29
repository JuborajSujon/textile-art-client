import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div className="pt-20 sm:pt-5">
      <Helmet>
        <title>Textil Art | About Us</title>
      </Helmet>

      <SectionTitle
        title="About Us"
        desctiption="we are passionate artisans dedicated to the timeless craft of textile art. With a blend of tradition and innovation, we curate and create exquisite pieces that celebrate the beauty of handmade craftsmanship. Our journey began with a love for art and a desire to share it with the world."
      />

      {/* about */}
    </div>
  );
};

export default AboutUs;
