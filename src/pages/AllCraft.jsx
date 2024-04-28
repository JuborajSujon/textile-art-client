import { Helmet } from "react-helmet-async";
import AllArtCraft from "../components/AllArtCraft/AllArtCraft";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const AllCraft = () => {
  const loadedData = useLoaderData();
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20 sm:pt-10 pb-20">
      <Helmet>
        <title>Textile Art | All Art & Craft</title>
      </Helmet>

      <AllArtCraft loadedData={loadedData} />
    </div>
  );
};

export default AllCraft;
