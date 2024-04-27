import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ErrorPage = () => {
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Textile Art | Page Not Found</title>
      </Helmet>
      <section className="relative bg-yellow-400/5">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
              <div className="text-center">
                <Link to={"/"}>
                  <img
                    src="https://i.ibb.co/9gj2ShB/logo.png"
                    className="mx-auto w-20"
                    alt=""
                  />
                </Link>
              </div>
              <div className=" text-center my-auto">
                <img
                  src="https://i.ibb.co/SxMVZWM/error.png"
                  className="mx-auto"
                  alt=""
                />
                <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold ">
                  Page Not Found?
                </h1>
                <p className="text-slate-400">
                  Whoops, this is embarassing. <br />
                  Looks like the page you were looking for was not found.
                </p>

                <div className="mt-4">
                  <Link
                    to={"/"}
                    className="btn bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-slate-900 rounded-md">
                    Back to Home
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-0 text-slate-400">
                  {new Date().getFullYear()}@ Textile Art. Design with
                  <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <Link
                    to={"https://github.com/JuborajSujon"}
                    target="_blank"
                    className="text-reset underline">
                    JuborajSujon
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
