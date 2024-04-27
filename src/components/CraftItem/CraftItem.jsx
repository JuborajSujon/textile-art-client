import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle";
// import SingleEstate from "./../SingleEstate/SingleEstate";

const CraftItem = ({ data }) => {
  return (
    <div>
      <SectionTitle
        title="Art & Craft Item"
        desctiption="Explore our diverse selection of handcrafted treasures, each meticulously crafted by skilled artisans. Find the perfect piece to adorn your home or wardrobe, or to gift to a loved one, and cherish the artistry of handmade beauty."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {data.map((item) => (
          <SingleEstate key={item.id} estate={item} />
        ))}
      </div>
    </div>
  );
};

CraftItem.propTypes = {
  data: PropTypes.array,
};

export default CraftItem;
