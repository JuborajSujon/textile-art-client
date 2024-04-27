import { FaRegHeart, FaShareAlt, FaRegBell } from "react-icons/fa";
import { FaRegEye, FaRegCircleCheck } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuBadgeDollarSign } from "react-icons/lu";
import { BsFiletypeDoc } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const CraftDetails = () => {
  // ensue that the page scrolls to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 pt-20 sm:pt-10 pb-20 ">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div>
            <div className="overflow-hidden w-full">
              <img
                className="w-full max-h-[70vh] object-cover"
                src="https://i.ibb.co/943YpPH/hero4.jpg"
                alt=""
              />
            </div>
            <div className="py-6">
              <ul className="flex justify-center items-center gap-4">
                <li className="flex items-center gap-2">
                  <FaRegHeart />
                  <span>Save</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaRegEye />
                  <span>View in room</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaShareAlt />
                  <span>Share</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-16 hidden md:block">
            <div className="overflow-x-auto">
              <table className="table dark:text-slate-300">
                <caption className="text-3xl font-bold text-slate-900 dark:text-slate-300">
                  Products Specification
                </caption>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Material</th>
                    <td>
                      Seven colour lithographic print on Somerset 300 gsm paper
                    </td>
                  </tr>
                  <tr>
                    <th>Rarity</th>
                    <td>17 3/10 × 20 9/10 in | 44 × 53 cm</td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td>Limited edition</td>
                  </tr>
                  <tr>
                    <th>Medium</th>
                    <td>Print</td>
                  </tr>
                  <tr>
                    <th>Condition</th>
                    <td>
                      The piece is stored and will be shipped in its original
                      gallery box.
                    </td>
                  </tr>
                  <tr>
                    <th>Signature</th>
                    <td>
                      Hand-signed by artist, Signed and numbered by the artist
                      on the front
                    </td>
                  </tr>
                  <tr>
                    <th>Certificate of authenticity</th>
                    <td>Included (issued by gallery)</td>
                  </tr>
                  <tr>
                    <th>Frame</th>
                    <td>Not included</td>
                  </tr>
                  <tr>
                    <th>Publisher</th>
                    <td>Paupers Press, London</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-300">
            Carroll Group
          </h1>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-300">
            Kajsa, 2024
          </h2>

          <div className="dark:text-slate-300 space-y-3">
            <p className="font-bold">Made to Order</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              provident exercitationem consequuntur cumque vero nihil.
            </p>
            <ul>
              <li className="flex items-center gap-2">
                <IoBagCheckOutline />
                <span>Part of limited set</span>
              </li>
              <li className="flex items-center gap-2">
                <BsFiletypeDoc />
                <span>Includes a Certificate of Authenticity</span>
              </li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-300">
            Price : $2000
          </h2>
          <div className="text-center flex flex-col gap-4 justify-center items-center">
            <button className="btn bg-yellow-400 w-full   hover:text-slate-900 dark:text-slate-900 hover:bg-yellow-500 text-base">
              Purchase
            </button>
            <button className="btn bg-transparent border-2 border-yellow-400 w-full   hover:text-slate-900 hover:bg-yellow-500 text-base">
              Make an Order
            </button>
          </div>

          {/* Accordion */}
          <div className="space-y-2">
            <div className="collapse collapse-arrow border rounded-md py-4 dark:text-slate-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-medium">
                Shipping and Texes
              </div>
              <div className="collapse-content">
                <p>
                  Taxes may apply at checkout.{" "}
                  <Link className="link">Learn more</Link>
                </p>
                <p>Ships from Los Angeles, CA, US Free shipping worldwide</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border rounded-md py-4 dark:text-slate-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-medium">
                Be covered by the Textile Art Guarantee when you checkout with
                Textile Art
              </div>
              <div className="collapse-content">
                <ul>
                  <li className="flex items-center gap-2">
                    <IoBagCheckOutline />
                    <span>Secure Checkout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LuBadgeDollarSign />
                    <span>Money-Back Guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck />
                    <span>Authenticity Guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 dark:text-slate-300">
            <h4>Pinto Gallery</h4>
            <button className="btn btn-sm w-40 bg-yellow-400  hover:text-slate-900 dark:text-slate-900  hover:bg-yellow-500 text-base">
              Contact Gallery
            </button>
          </div>
          <div className="flex justify-between items-center gap-4">
            <h4>Get notifications for similar works</h4>
            <button className="btn btn-sm w-40 bg-yellow-400  hover:text-slate-900 dark:text-slate-900 hover:bg-yellow-500 text-base">
              <FaRegBell />
              Create Alert
            </button>
          </div>
          <div>
            <p>
              Want to sell a work by this artist? Sell with{" "}
              <Link className="link">Textile Art</Link>
            </p>
          </div>
        </div>
      </div>

      {/* tab-content */}
      <div className="pt-16 md:hidden">
        <div className="overflow-x-auto">
          <table className="table dark:text-slate-300">
            <caption className="text-3xl font-bold text-slate-900 dark:text-slate-300">
              Products Specification
            </caption>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Material</th>
                <td>
                  Seven colour lithographic print on Somerset 300 gsm paper
                </td>
              </tr>
              <tr>
                <th>Rarity</th>
                <td>17 3/10 × 20 9/10 in | 44 × 53 cm</td>
              </tr>
              <tr>
                <th>Size</th>
                <td>Limited edition</td>
              </tr>
              <tr>
                <th>Medium</th>
                <td>Print</td>
              </tr>
              <tr>
                <th>Condition</th>
                <td>
                  The piece is stored and will be shipped in its original
                  gallery box.
                </td>
              </tr>
              <tr>
                <th>Signature</th>
                <td>
                  Hand-signed by artist, Signed and numbered by the artist on
                  the front
                </td>
              </tr>
              <tr>
                <th>Certificate of authenticity</th>
                <td>Included (issued by gallery)</td>
              </tr>
              <tr>
                <th>Frame</th>
                <td>Not included</td>
              </tr>
              <tr>
                <th>Publisher</th>
                <td>Paupers Press, London</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
