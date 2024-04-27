import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import useAuth from "../customHook/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const { signInUser, googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //  ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Login Handler
  const onSubmit = (data) => {
    const { email, password } = data;
    // Login Handler
    signInUser(email, password)
      .then((result) => {
        toast.success("Login Successful", { autoClose: 2000 });
        const user = result.user;

        if (user) {
          navigate(location?.state || "/");
        }
      })
      .catch(() => {
        toast.error("Login Failed", { autoClose: 2000 });
      });
    reset();
  };

  // Handle social login
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful", { autoClose: 2000 });
        if (user) {
          navigate(location?.state || "/");
        }
      })
      .catch(() => {
        toast.error("Login Failed", { autoClose: 2000 });
      });
  };
  return (
    <>
      <Helmet>
        <title>Textile Art | Login</title>
      </Helmet>
      <section className="relative w-full min-h-screen dark:bg-slate-900 h-full py-40 bg-[url(https://i.ibb.co/mBBHggp/bg-login-final.png)] bg-no-repeat bg-cover bg-center ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-slate-500 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      onClick={() => handleSocialLogin(githubLogin)}
                      className="bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow border-2 border-transparent hover:border-2 hover:border-yellow-400 hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button">
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src="https://demos.creative-tim.com/notus-nextjs/img/github.svg"
                      />
                      Github
                    </button>
                    <button
                      onClick={() => handleSocialLogin(googleLogin)}
                      className="bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow border-2 border-transparent hover:shadow-md hover:border-2 hover:border-yellow-400 inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button">
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src="https://demos.creative-tim.com/notus-nextjs/img/google.svg"
                      />
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-slate-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-slate-400 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Email
                      </label>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        name="email"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                      {errors.email && (
                        <p className="text-red-500">
                          Please enter a valid email
                        </p>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Password
                      </label>
                      <input
                        {...register("password", { required: true })}
                        type={password ? "" : "password"}
                        name="password"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                      <div className="absolute top-1/2 -translate-y-1/2 right-3 mt-3">
                        {password ? (
                          <BsEyeSlash
                            onClick={() => setPassword(!password)}
                            size={20}
                          />
                        ) : (
                          <BsEye
                            onClick={() => setPassword(!password)}
                            size={20}
                          />
                        )}
                      </div>
                      {errors.password && (
                        <p className="text-red-500">
                          Please enter a valid password
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          id="customCheckLogin"
                          className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-slate-600">
                          Remember me
                        </span>
                      </label>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-slate-800 text-white  hover:bg-slate-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none border-2 border-transparent hover:border-2 hover:border-yellow-400 focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                  <Link className="text-slate-900 dark:text-slate-300 hover:underline">
                    <small className="text-base">Forgot password?</small>
                  </Link>
                </div>
                <div className="w-1/2 text-right">
                  <Link
                    to="/register"
                    className="text-slate-900 dark:text-slate-300 hover:underline">
                    <small className="text-base">Create new account</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
