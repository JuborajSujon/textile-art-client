import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import PropTypes from "prop-types";
import GeneralLoading from "../GeneralLoading/GeneralLoading";

const AllArtCraft = ({ loadedData, loading }) => {
  return (
    <div>
      <SectionTitle
        title="Art & Craft Item"
        desctiption="Explore our diverse selection of handcrafted treasures, each meticulously crafted by skilled artisans. Find the perfect piece to adorn your home or wardrobe, or to gift to a loved one, and cherish the artistry of handmade beauty."
      />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th>Photo</th>
              <th>Item Name</th>
              <th>Subcategorey</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loading && (
              <tr>
                <td colSpan="5" className="text-center">
                  <GeneralLoading />
                </td>
              </tr>
            )}
            {loadedData.map((data) => (
              <tr key={data._id}>
                <td>
                  <div className="avatar">
                    <div className="mask w-24 h-24">
                      <img src={data.image} alt={data.item_name} />
                    </div>
                  </div>
                </td>
                <td>{data.item_name}</td>
                <td>{data.subcategory_name}</td>
                <td>{data.price}</td>
                <td>{data.stockStatus}</td>
                <th>
                  <Link
                    to={`/craftdetails/${data._id}`}
                    className="btn bg-yellow-400 btn-xs h-10 sm:btn-sm">
                    View Details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

AllArtCraft.propTypes = {
  loadedData: PropTypes.array,
  loading: PropTypes.bool,
};

export default AllArtCraft;
