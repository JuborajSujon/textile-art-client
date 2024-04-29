import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleCraft from "../SingleCraft/SingleCraft";
import { useEffect, useState } from "react";
import GeneralLoading from "../GeneralLoading/GeneralLoading";
import { toast } from "react-toastify";

const CraftItem = () => {
  const [loading, setLoading] = useState(true);
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://textile-art-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.slice(0, 6);
        setCrafts(newData);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Data Loading Failed. Try Again.", {
          autoClose: 2000,
        });
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        title="Art & Craft Item"
        desctiption="Explore our diverse selection of handcrafted treasures, each meticulously crafted by skilled artisans. Find the perfect piece to adorn your home or wardrobe, or to gift to a loved one, and cherish the artistry of handmade beauty."
      />

      {loading && <GeneralLoading />}
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
