import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-raleway">
      <div className="h-[60px]">
        <h1 className="text-3xl font-bold ">Navbar</h1>
      </div>
      <div className="min-h-[calc(100vh-76px)] overflow-x-hidden  ">
        <Outlet />
      </div>
      <h1 className="text-3xl font-bold">Footer</h1>
    </div>
  );
};

export default Root;
