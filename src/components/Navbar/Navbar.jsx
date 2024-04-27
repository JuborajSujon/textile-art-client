import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../customHook/useAuth";
import ThemeController from "../ThemeController/ThemeController";

const Navbar = () => {
  const { userSignOut, setUser, user, reload, isHovered, setIsHovered } =
    useAuth();

  // handle user info show or hide on navbar
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    userSignOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {}, [user, reload]);

  const navList = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-900 dark:text-yellow-400 border-b-4 border-yellow-400 hover:border-slate-300"
              : "hover:text-slate-900 hover:bg-yellow-400 dark:text-yellow-400 dark:hover:text-slate-900"
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-art-craft"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-900 dark:text-yellow-400 border-b-4 border-yellow-400 hover:border-slate-300"
              : "hover:text-slate-900 hover:bg-yellow-400 dark:text-yellow-400 dark:hover:text-slate-900"
          }>
          All Art & Craft Items
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-craft"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-900 dark:text-yellow-400 border-b-4 border-yellow-400 hover:border-slate-300"
                  : "hover:text-slate-900 hover:bg-yellow-400 dark:text-yellow-400 dark:hover:text-slate-900"
              }>
              Add Craft Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-craft-list"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-900 dark:text-yellow-400 border-b-4 border-yellow-400 hover:border-slate-300"
                  : "hover:text-slate-900 hover:bg-yellow-400 dark:text-yellow-400 dark:hover:text-slate-900"
              }>
              My Art & Craft List
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="navbar max-w-[1540px] fixed  z-10 bg-white dark:bg-slate-900 dark:text-slate-300 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost min-h-9 h-9 px-2  md:hidden hover:bg-yellow-500 hover:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="2 2 20 20"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
            {navList}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost hover:bg-stone-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-bold  min-h-10 h-12 -ml-2 ">
          <img
            className="w-10"
            src="https://i.ibb.co/9gj2ShB/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal text-sm font-semibold px-1 space-x-2">
          {navList}
        </ul>
      </div>
      <div className="navbar-end  space-x-2">
        {/*Theme toggle Controller*/}
        <div className="hidden sm:block">
          <ThemeController />
        </div>

        {user ? (
          <div className="relative">
            <div className="flex items-center  gap-1 sm:gap-2">
              <label
                onMouseOver={handleMouseEnter}
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hover:bg-yellow-500 min-h-8 h-10 w-10  sm:min-h-12 sm:h-12 sm:w-12">
                <div className="w-12 rounded-full">
                  <img
                    className=""
                    src={
                      user?.photoURL || "https://i.ibb.co/Jn1jJHN/avater.png"
                    }
                  />
                </div>
              </label>
            </div>
            {isHovered && (
              <ul
                tabIndex={0}
                onMouseLeave={handleMouseLeave}
                className="menu menu-sm dropdown-content mt-0 -ml-48 z-[1] py-3 px-4 shadow bg-base-100 rounded-md w-64 absolute space-y-2">
                <li className="text-base font-medium">
                  Name : {user?.displayName || "user name not found"}
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-ghost border border-yellow-400 hover:bg-yellow-500 text-base sm:text-xl font-semibold min-h-8 h-8 px-2 sm:px-4 sm:min-h-10 sm:h-10">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="flex gap-1 sm:gap-2">
            <Link to="/login">
              <button className="px-2 rounded-md border border-yellow-400 hover:bg-yellow-400 hover:text-slate-900 text-base  font-semibold min-h-8 h-8 sm:min-h-10 sm:h-10">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="px-2 rounded-md border border-yellow-400 hover:bg-yellow-400 hover:text-slate-900 text-base font-semibold min-h-8 h-8 sm:min-h-10 sm:h-10">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
