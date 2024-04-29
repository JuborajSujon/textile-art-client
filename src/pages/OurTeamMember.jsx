import { useEffect, useState } from "react";
import AIChat from "../components/AIChat/AIChat";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import GeneralLoading from "../components/GeneralLoading/GeneralLoading";
import { Helmet } from "react-helmet-async";

const OurTeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://textile-art-server-41133yyib-md-sujon-miahs-projects-5e83d33c.vercel.app/teamMember"
    )
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.messge));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-5">
      <Helmet>
        <title>Textile Art | Our Team</title>
      </Helmet>
      <SectionTitle
        title="A Dynamic Team."
        desctiption="Our team of skilled professionals who are dedicated to providing exceptional service and quality products."
      />

      {loading && <GeneralLoading />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4">
        {teamMembers?.map((item) => (
          <div
            key={item.name}
            className="card border shadow-md dark:bg-yellow-50 group overflow-hidden hover:border-yellow-400">
            <div className="card-body">
              <h2 className="text-xl md:text-3xl font-bold text-center font-chakraPetch dark:text-slate-600">
                {item.name}
              </h2>
              <p className="text-center  text-lg md:text-xl dark:text-slate-500">
                {item.designation}
              </p>
              <div className="p-2 max-h-72">
                <img
                  className="w-full h-full object-contain rounded-lg"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 group-hover:bottom-5 transition-all duration-300">
              <div className="flex items-center gap-2 p-2 group-hover:bg-yellow-400 rounded-md">
                <div className="p-2 rounded-md cursor-pointer border border-slate-900 hover:bg-slate-900 hover:text-white">
                  <FaFacebook
                    className="dark:group-hover:text-white"
                    size={25}
                  />
                </div>
                <div className="p-2 rounded-md cursor-pointer border border-slate-900 hover:bg-slate-900 hover:text-white">
                  <FaTwitter
                    className="dark:group-hover:text-white"
                    size={25}
                  />
                </div>
                <div className="p-2 rounded-md cursor-pointer border border-slate-900 hover:bg-slate-900 hover:text-white">
                  <FaGithub className="dark:group-hover:text-white" size={25} />
                </div>
                <div className="p-2 rounded-md cursor-pointer border border-slate-900 hover:bg-slate-900 hover:text-white">
                  <FaLinkedin
                    className="dark:group-hover:text-white"
                    size={25}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AIChat />
    </div>
  );
};

export default OurTeamMember;
