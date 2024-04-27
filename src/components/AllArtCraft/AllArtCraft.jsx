import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

const AllArtCraft = () => {
  const id = 1;
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
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask w-24 h-24">
                    <img src="https://i.ibb.co/943YpPH/hero4.jpg" alt="name" />
                  </div>
                </div>
              </td>
              <td>Carroll Group</td>
              <td>$2000</td>
              <td>Made to Order</td>
              <th>
                <Link
                  to={`/craftdetails/${id}`}
                  className="btn bg-yellow-400 btn-xs h-10 sm:btn-sm">
                  View Details
                </Link>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask w-24 h-24">
                    <img src="https://i.ibb.co/943YpPH/hero4.jpg" alt="name" />
                  </div>
                </div>
              </td>
              <td>Carroll Group</td>
              <td>$2000</td>
              <td>Made to Order</td>
              <th>
                <Link
                  to={`/craftdetails/${id}`}
                  className="btn bg-yellow-400 h-10 btn-xs sm:btn-sm">
                  View Details
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCraft;
