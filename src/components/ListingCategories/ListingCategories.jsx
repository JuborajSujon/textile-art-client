import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import GeneralLoading from "../GeneralLoading/GeneralLoading";
import { toast } from "react-toastify";

const ListingCategories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://textile-art-server-41133yyib-md-sujon-miahs-projects-5e83d33c.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Data Loading Failed. Try Again.", {
          autoClose: 2000,
        });
        console.log(error.message);
      });
  }, []);

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <SectionTitle
        title="Art & Craft Categories"
        desctiption="Explore the intricate stitches of embroidery, the cozy comfort of knitting and crocheting, the timeless charm of quilting, the shimmering beauty of beadwork, the vibrant hues of tie-dyeing, and the intricate knots of macrame."
      />
      {loading && <GeneralLoading />}
      <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 mx-4 md:gap-[30px] gap-3">
        {categories.map((category) => (
          <Link
            to={`/specific-category/${category.subcategory_name}`}
            key={category._id}
            className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 flex flex-col justify-between">
            <img
              className="grow"
              src={category.image}
              alt={category.subcategory_name}
            />
            <div className="p-4">
              <h3 className="text-base lg:text-lg font-medium hover:text-green-600">
                {category.subcategory_name.toUpperCase()}
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                {category.total_post} Listings
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListingCategories;
