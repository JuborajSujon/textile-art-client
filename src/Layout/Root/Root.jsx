import { Outlet } from "react-router-dom";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div className="font-raleway">
      <div className="h-[76px]">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-120px)] overflow-x-hidden ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
