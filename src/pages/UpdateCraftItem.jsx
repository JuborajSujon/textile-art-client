import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCraftItem = () => {
  const loaded = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    image,
    item_name,
    price,
    rating,
    customization,
    stockStatus,
    processing_time,
    short_description,
    subcategory_name,
    userEmail,
    userName,
  } = loaded;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  //  ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setValue("image", image);
    setValue("item_name", item_name);
    setValue("price", price);
    setValue("rating", rating);
    setValue("customization", customization);
    setValue("stockStatus", stockStatus);
    setValue("processing_time", processing_time);
    setValue("short_description", short_description);
    setValue("subcategory_name", subcategory_name);
  }, [
    setValue,
    image,
    item_name,
    price,
    rating,
    customization,
    stockStatus,
    processing_time,
    short_description,
    subcategory_name,
  ]);

  const onSubmit = (data) => {
    const newData = {
      ...data,
      userEmail: userEmail,
      userName: userName,
    };

    fetch(`https://textile-art-server.vercel.app/updateProduct/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((getData) => {
        if (getData.acknowledged) {
          toast.success("Craft Item Updated Successfully", {
            autoClose: 2000,
          });
          navigate("/my-craft-list");
          reset();
        }
      })
      .catch((err) => {
        toast.error("Craft Item Update Failed", {
          autoClose: 2000,
        });
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Textile Art | Update Craft Item</title>
      </Helmet>
      <section className="relative w-full min-h-screen dark:bg-slate-900 h-full pt-20  pb-20  bg-[url(https://i.ibb.co/mBBHggp/bg-login-final.png)] bg-no-repeat bg-cover bg-center ">
        <div className="container mx-auto px-4 h-full">
          <div className="sm:max-w-[70%] mx-auto ">
            <div className="w-full px-4">
              <div className="relative  w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-slate-500 text-base font-bold">
                      Update Art & Craft
                    </h6>
                  </div>

                  <hr className="mt-6 border-b-1 border-slate-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="form-name">
                          Name
                        </label>
                        <input
                          {...register("item_name", { required: true })}
                          type="text"
                          id="form-name"
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Name"
                        />
                        {errors.name && (
                          <p className="text-red-500">
                            Please enter a valid name
                          </p>
                        )}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="form-photo">
                          Photo URL
                        </label>
                        <input
                          {...register("image", { required: true })}
                          type="text"
                          id="form-photo"
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Photo URL"
                        />
                        {errors.photo && (
                          <p className="text-red-500">
                            Please enter a valid photo url
                          </p>
                        )}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="form-subName">
                          Subcategory Name
                        </label>
                        <select
                          {...register("subcategory_name", { required: true })}
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                          <option value="embroidery">Embroidery</option>
                          <option value="knitting & crocheting">
                            Knitting & Crocheting
                          </option>
                          <option value="quilting">Quilting</option>
                          <option value="breadwork">Beadwork</option>
                          <option value="tie-dyeing">Tie-dyeing</option>
                          <option value="macrame">Macrame</option>
                        </select>
                        {errors.name && (
                          <p className="text-red-500">
                            Please enter a valid subcategory name
                          </p>
                        )}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="form-description">
                          Short Description
                        </label>
                        <input
                          {...register("short_description", { required: true })}
                          type="text"
                          id="form-description"
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Short Description"
                        />
                        {errors.name && (
                          <p className="text-red-500">
                            Please enter a valid short description
                          </p>
                        )}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="form-price">
                          Price
                        </label>
                        <input
                          {...register("price", { required: true })}
                          type="number"
                          id="form-price"
                          className="border-0 px-3 py-3 font-chakraPetch placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Price in dollar"
                        />
                        {errors.name && (
                          <p className="text-red-500">
                            Please enter a valid price
                          </p>
                        )}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="form-rating">
                          Rating
                        </label>
                        <input
                          {...register("rating", { required: true })}
                          type="text"
                          id="form-rating"
                          className="border-0 px-3 py-3 font-chakraPetch placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Rating"
                        />
                        {errors.name && (
                          <p className="text-red-500">
                            Please enter a valid rating
                          </p>
                        )}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="form-time">
                          Processing Time
                        </label>
                        <input
                          {...register("processing_time", { required: true })}
                          type="text"
                          id="form-rating"
                          className="border-0 px-3 py-3 font-chakraPetch placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Processing Time"
                        />
                        {errors.name && (
                          <p className="text-red-500">
                            Please enter a valid processing time
                          </p>
                        )}
                      </div>
                      <div className="relative w-full mb-3">
                        <div className="flex items-center gap-2">
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
                              Customization
                            </label>
                            <select
                              name="form-customization"
                              {...register("customization", { required: true })}
                              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              id="">
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
                              Stock Status
                            </label>
                            <select
                              name="form-stock"
                              {...register("stockStatus", { required: true })}
                              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              id="">
                              <option value="In Stock">In Stock</option>
                              <option value="Made To Order">
                                Made To Order
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-slate-800 text-white  hover:bg-slate-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none border-2 border-transparent hover:border-2 hover:border-yellow-400 focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateCraftItem;
