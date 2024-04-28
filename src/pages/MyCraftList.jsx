import { useEffect, useState } from "react";
import MyCraftCard from "../components/MyCraftCard/MyCraftCard";
import useAuth from "../customHook/useAuth";

const MyCraftList = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [customization, setCustomization] = useState("All");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/userproducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (customization === "All") {
          setProducts(data);
          setLoading(false);
        } else if (customization === "Yes") {
          const yesProducts = data.filter(
            (product) => product.customization === "Yes"
          );
          setProducts(yesProducts);
          setLoading(false);
        } else if (customization === "No") {
          const noProducts = data.filter(
            (product) => product.customization === "No"
          );
          setProducts(noProducts);
          setLoading(false);
        }
      });
  }, [user?.email, customization]);

  const handleChange = (event) => {
    setCustomization(event.target.value);
  };
  console.log(loading);
  return (
    <div className="pt-20 sm:pt-4 pb-20">
      <div className="text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold dark:text-slate-200 ">
          My Craft List
        </h3>
      </div>
      <div className="py-5 px-4 text-center">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-slate-600 text-lg font-bold mb-2">
            Filter By Customization
          </label>
          <select
            onChange={handleChange}
            defaultValue="All"
            name="form-customization"
            className="select border-0 px-3 py-3 placeholder-slate-300 text-slate-600 rounded text-lg shadow focus:outline-none focus:ring w-full sm:w-[400px] ease-linear transition-all duration-150 bg-yellow-400"
            id="">
            <option className="text-center bg-gray-200" value="All">
              All
            </option>
            <option className="text-center bg-gray-200" value="Yes">
              Yes
            </option>
            <option className="text-center bg-gray-200" value="No">
              No
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p className="text-center font-bold text-red-500">Loading...</p>
        ) : (
          products?.map((product) => (
            <MyCraftCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyCraftList;
