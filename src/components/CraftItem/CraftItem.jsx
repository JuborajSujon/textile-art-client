import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleCraft from "../SingleCraft/SingleCraft";

const CraftItem = () => {
  const data = [
    {
      id: 1,
      name: "Craft 1",
      image: "https://i.ibb.co/Hqr549Y/Hero2.jpg",
      stockStatus: "In Stock",
    },
    {
      id: 2,
      name: "Craft 2",
      image: "https://i.ibb.co/Hqr549Y/Hero2.jpg",
      stockStatus: "Made to Order",
    },
    {
      id: 3,
      name: "Craft 3",
      image: "https://i.ibb.co/Hqr549Y/Hero2.jpg",
      stockStatus: "In Stock",
    },
    {
      id: 4,
      name: "Craft 4",
      image: "https://i.ibb.co/Hqr549Y/Hero2.jpg",
      stockStatus: "Made to Order",
    },
    {
      id: 5,
      name: "Craft 5",
      image: "https://i.ibb.co/Hqr549Y/Hero2.jpg",
      stockStatus: "Made to Order",
    },
    {
      id: 6,
      name: "Craft 6",
      image: "https://i.ibb.co/Hqr549Y/Hero2.jpg",
      stockStatus: "In Stock",
    },
  ];
  return (
    <div>
      <SectionTitle
        title="Art & Craft Item"
        desctiption="Explore our diverse selection of handcrafted treasures, each meticulously crafted by skilled artisans. Find the perfect piece to adorn your home or wardrobe, or to gift to a loved one, and cherish the artistry of handmade beauty."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {data.map((item) => (
          <SingleCraft key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

CraftItem.propTypes = {
  data: PropTypes.array,
};

export default CraftItem;
