import { Helmet } from "react-helmet-async";
import AllArtCraft from "../components/AllArtCraft/AllArtCraft";

const AllCraft = () => {
  return (
    <div className="pt-20 sm:pt-10 pb-20">
      <Helmet>
        <title>Textile Art | All Art & Craft</title>
      </Helmet>

      <AllArtCraft />
    </div>
  );
};

export default AllCraft;
