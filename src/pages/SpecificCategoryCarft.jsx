import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import GeneralLoading from "../components/GeneralLoading/GeneralLoading";
import SingleCraft from "../components/SingleCraft/SingleCraft";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const SpecificCategoryCarft = () => {
  const params = useParams();
  console.log(params);

  const [loading, setLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/products/${params.category}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedData(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Data Loading Failed. Try Again.", {
          autoClose: 2000,
        });
        console.log(error.message);
      });
  }, [params.category]);
  return (
    <div className="pt-20 sm:pt-10 pb-20">
      <Helmet>
        <title>Textile Art | Category Art & Craft</title>
      </Helmet>

      <SectionTitle
        title="Art & Craft Item"
        desctiption="Explore our diverse selection of handcrafted treasures, each meticulously crafted by skilled artisans. Find the perfect piece to adorn your home or wardrobe, or to gift to a loved one, and cherish the artistry of handmade beauty."
      />

      {loading && <GeneralLoading />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {loadedData.map((item) => (
          <SingleCraft key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecificCategoryCarft;
