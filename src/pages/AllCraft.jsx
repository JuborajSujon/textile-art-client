import { Helmet } from "react-helmet-async";
import AllArtCraft from "../components/AllArtCraft/AllArtCraft";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllCraft = () => {
  const [loading, setLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setLoadedData(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Data Loading Failed. Try Again.", {
          autoClose: 2000,
        });
        console.log(error.message);
      });
  }, []);

  return (
    <div className="pt-20 sm:pt-10 pb-20">
      <Helmet>
        <title>Textile Art | All Art & Craft</title>
      </Helmet>

      <AllArtCraft loadedData={loadedData} loading={loading} />
    </div>
  );
};

export default AllCraft;
