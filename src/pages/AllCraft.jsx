import { Helmet } from "react-helmet-async";
import CraftItem from "../components/CraftItem/CraftItem";

const AllCraft = () => {
  return (
    <div className="pb-20">
      <Helmet>
        <title>Textile Art | All Art & Craft</title>
      </Helmet>

      <CraftItem />
    </div>
  );
};

export default AllCraft;
