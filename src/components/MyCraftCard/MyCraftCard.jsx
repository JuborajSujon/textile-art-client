import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyCraftCard = ({ product }) => {
  const { _id, image, item_name, price, rating, customization, stockStatus } =
    product;

  const newStockStatus = stockStatus.toLowerCase();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://textile-art-server-41133yyib-md-sujon-miahs-projects-5e83d33c.vercel.app/productdelete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              window.location.reload();
            }
          })
          .catch((err) => {
            Swal.fire("Error!", err.message, "error");
          });
      }
    });
  };

  return (
    <div className="group rounded-lg bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden  m-3 flex flex-col">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
          src={image}
          alt={item_name}
        />
      </div>

      <div className="p-6 flex-grow  flex flex-col justify-between">
        <div className="pb-4">
          <h3
            className="text-xl font-medium text-slate-900
                 dark:text-slate-200 dark:hover:text-yellow-500">
            {item_name}
          </h3>
        </div>
        <ul className=" flex justify-between items-center list-none">
          <li>
            <p className="text-lg dark:text-slate-300 font-medium">
              <span className="text-slate-400 dark:text-slate-300 mr-2">
                Price:
              </span>
              $<span className="font-chakraPetch">{price}</span>
            </p>
          </li>

          <li>
            <ul className="text-lg font-medium  list-none">
              <li
                className="inline text-slate-900 
              dark:text-slate-300 ">
                <span className="text-slate-400 mr-2">Rating:</span>
                <span className="font-chakraPetch">{rating}</span>
              </li>
            </ul>
          </li>
        </ul>
        <div className="pb-4 pt-2 flex items-center justify-between">
          <p className="text-slate-900 dark:text-slate-300  font-semibold">
            Customization : {customization}
          </p>

          <p
            className={`text-base font-medium ${
              newStockStatus === "in stock"
                ? "text-green-500 hover:text-slate-900  dark:text-slate-200 dark:hover:text-green-600"
                : "text-yellow-500 hover:text-blue-400 dark:text-slate-900 dark:hover:text-yellow-500"
            }`}>
            {stockStatus}
          </p>
        </div>

        <div className=" flex justify-between">
          <Link
            to={`/update/${_id}`}
            className="btn text-base bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-slate-900 rounded-md ">
            Update
          </Link>
          <Link
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn text-base bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-slate-900 rounded-md ">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

MyCraftCard.propTypes = {
  product: PropTypes.object,
};

export default MyCraftCard;
