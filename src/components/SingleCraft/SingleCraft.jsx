import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const SingleCraft = ({ item }) => {
  const { id, stockStatus } = item;
  const [isStock, setIsStock] = useState(stockStatus);

  if (isStock === "In Stock") {
    setIsStock(true);
  }
  if (isStock === "Made to Order") {
    setIsStock(false);
  }

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      className="group rounded-lg bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden  m-3 flex flex-col">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
          src="https://i.ibb.co/Hqr549Y/Hero2.jpg"
          alt="Craft Item"
        />

        <div className="absolute top-4 end-4">
          <p className="p-2 btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-700 dark:text-slate-300 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">
            <AiFillHeart size={20} />
          </p>
        </div>
      </div>

      <div className="p-6 flex-grow  flex flex-col justify-between">
        <div className="pb-4">
          <h3
            className="text-xl font-medium text-slate-900
                 dark:text-slate-200 dark:hover:text-yellow-500">
            Item Title
          </h3>
        </div>
        <div className="pb-4 flex items-center justify-between">
          <div>
            <p className="text-slate-900 dark:text-slate-300  font-semibold">
              Subcategory Name
            </p>
            <p className="text-slate-900 dark:text-slate-300  font-semibold">
              Customization
            </p>
          </div>
          <p
            className={`text-base font-medium ${
              isStock
                ? "text-green-500 hover:text-slate-900  dark:text-slate-200 dark:hover:text-green-600"
                : "text-yellow-500 hover:text-blue-400 dark:text-slate-900 dark:hover:text-yellow-500"
            }`}>
            {stockStatus}
          </p>
        </div>

        <div className="pb-4">
          <p className="text-slate-600 dark:text-slate-300 font-chakraPetch">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <ul className="pt-6 flex justify-between items-center list-none">
          <li>
            <p className="text-lg dark:text-slate-300 font-medium">
              <span className="text-slate-400 dark:text-slate-300 mr-2">
                Price:
              </span>
              $2000
            </p>
          </li>

          <li>
            <ul className="text-lg font-medium  list-none">
              <li
                className="inline text-slate-900 
              dark:text-slate-300 ">
                <span className="text-slate-400 mr-2">Rating:</span>
                5.0
              </li>
            </ul>
          </li>
        </ul>

        <div className="pt-6">
          <Link
            to={`/craftdetails/${id}`}
            className="btn text-base bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-slate-900 rounded-md w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleCraft.propTypes = {
  item: PropTypes.object,
};

export default SingleCraft;
