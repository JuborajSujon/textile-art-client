import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleCraft from "../SingleCraft/SingleCraft";
import { useEffect, useState } from "react";

const CraftItem = () => {
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.slice(0, 6);
        setCrafts(newData);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        title="Art & Craft Item"
        desctiption="Explore our diverse selection of handcrafted treasures, each meticulously crafted by skilled artisans. Find the perfect piece to adorn your home or wardrobe, or to gift to a loved one, and cherish the artistry of handmade beauty."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {crafts.map((item) => (
          <SingleCraft key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

CraftItem.propTypes = {
  data: PropTypes.array,
};

export default CraftItem;
