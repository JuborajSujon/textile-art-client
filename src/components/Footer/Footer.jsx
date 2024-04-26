import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121922] text-white">
      <div className="container mx-auto pt-32 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="">
            <div className="mb-10 lg:mb-8">
              <img
                src="https://i.ibb.co/9gj2ShB/logo.png"
                className="mb-4 w-16"
                alt="banner image"
              />
              <h2 className="mb-4 lg:mb-8 text-white text-2xl font-chakraPetch font-bold">
                Textile Art
              </h2>
              <p className="mb-4 lg:mb-8 text-white pr-8">
                Textile arts are arts and crafts that use plant, animal, or
                synthetic fibers to create decorative or practical objects. It's
                one of the oldest forms of art and has been a part of human life
                since the beginning of civilization.
              </p>
              <div>
                <h5 className="mb-4 text-white">Follow Us</h5>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md cursor-pointer border border-white">
                    <FaFacebook size={25} />
                  </div>
                  <div className="p-2 rounded-md cursor-pointer border border-white">
                    <FaTwitter size={25} />
                  </div>
                  <div className="p-2 rounded-md cursor-pointer border border-white">
                    <FaGithub size={25} />
                  </div>
                  <div className="p-2 rounded-md cursor-pointer border border-white">
                    <FaLinkedin size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-10 lg:mb-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="">
                  <h5 className="mb-5 font-bold text-white lg:mb-6">Company</h5>
                  <ul>
                    <li className="mb-3 hover:text-yellow-400">
                      <Link to="/about">About us</Link>
                    </li>
                    <li className="mb-3 hover:text-yellow-400">
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li className="mb-3 hover:text-yellow-400">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h5 className="mb-5 font-bold text-white lg:mb-6">Pages</h5>
                  <ul>
                    <li className="mb-3 hover:text-yellow-400">
                      <Link to="/team">Our team</Link>
                    </li>
                    <li className="mb-3 hover:text-yellow-400">
                      <Link to="/career">Career</Link>
                    </li>
                    <li className="mb-3 hover:text-yellow-400">
                      <Link to="/error">404 Page</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-10 lg:mb-8">
              <h3 className="mb-2 font-bold text-4xl text-white">
                Subscribe to the latest news
              </h3>
              <p className="mb-7 text-white font-chakraPetch">
                Stay in the loop and never miss out on the latest updates
                insights, and trends by subscribing to our newsletter!
              </p>
              <div className="flex flex-nowrap">
                <input
                  className="form-input w-full rounded-l-[8px] rounded-r-none border-r-0 border-transparent px-4"
                  placeholder="Your email adress"
                  type="text"
                  name="subscribe"
                  autoComplete="off"
                />{" "}
                <button
                  className="btn bg-yellow-400 font-bold rounded-l-none rounded-r-[8px] hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400 w-40"
                  type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-light py-7">
          <div className="container text-center">
            <p className="copyright">
              Designed And Developed By{" "}
              <Link to="https://github.com/JuborajSujon">Juboraj Sujon</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
