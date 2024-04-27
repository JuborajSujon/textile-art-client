import { Outlet } from "react-router-dom";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ThemeController from "../../components/ThemeController/ThemeController";

const Root = () => {
  return (
    <div className="font-raleway">
      <div className="sm:h-[60px] md:h-[67px]">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-110px)] overflow-x-hidden ">
        <Outlet />
      </div>
      <div className="sm:hidden fixed top-1/4 left-2 z-50">
        <ThemeController />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
