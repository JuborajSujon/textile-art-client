import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const MyCraftCard = () => {
  const item = {
    id: 1,
    stockStatus: "In Stock",
  };
  const { id, stockStatus } = item;
  const [isStock, setIsStock] = useState(stockStatus);

  if (isStock === "In Stock") {
    setIsStock(true);
  }
  if (isStock === "Made to Order") {
    setIsStock(false);
  }
  return (
    <div className="group rounded-lg bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden  m-3 flex flex-col">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
          src="https://i.ibb.co/Hqr549Y/Hero2.jpg"
          alt="Craft Item"
        />
      </div>

      <div className="p-6 flex-grow  flex flex-col justify-between">
        <div className="pb-4">
          <h3
            className="text-xl font-medium text-slate-900
                 dark:text-slate-200 dark:hover:text-yellow-500">
            Item Title
          </h3>
        </div>
        <ul className=" flex justify-between items-center list-none">
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
        <div className="pb-4 pt-2 flex items-center justify-between">
          <p className="text-slate-900 dark:text-slate-300  font-semibold">
            Customization
          </p>

          <p
            className={`text-base font-medium ${
              isStock
                ? "text-green-500 hover:text-slate-900  dark:text-slate-200 dark:hover:text-green-600"
                : "text-yellow-500 hover:text-blue-400 dark:text-slate-900 dark:hover:text-yellow-500"
            }`}>
            {stockStatus}
          </p>
        </div>

        <div className=" flex justify-between">
          <Link
            to={`/update/${id}`}
            className="btn text-base bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-slate-900 rounded-md ">
            Update
          </Link>
          <Link
            to={`/delete/${id}`}
            className="btn text-base bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-slate-900 rounded-md ">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

MyCraftCard.propTypes = {
  item: PropTypes.object,
};

export default MyCraftCard;
