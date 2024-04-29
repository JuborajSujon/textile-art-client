import { useEffect } from "react";
import AIChat from "../components/AIChat/AIChat";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const OurTeamMember = () => {
  const teamMember = [
    {
      name: "Terry Henderson",
      designation: "Product Marketer",
      image: "https://i.ibb.co/XWS2FJN/terry.png",
    },
    {
      name: "Grace Turner",
      designation: "Sourcing Manager",
      image: "https://i.ibb.co/rFdBkjn/grace.png",
    },
    {
      name: "Ethan Mitchell",
      designation: "Gallery Administrator",
      image: "https://i.ibb.co/jV2yzqg/ethan.png",
    },
    {
      name: "Ava Reynolds",
      designation: "Gallery Photographer",
      image: "https://i.ibb.co/Y2T7TS7/ava.png",
    },
    {
      name: "Sophia Parker",
      designation: "Gallery Technician",
      image: "https://i.ibb.co/7NyhqJ5/sophia.png",
    },
    {
      name: "Noah Anderson",
      designation: "Gallery Curator",
      image: "https://i.ibb.co/7pZLBzp/noah.png",
    },
    {
      name: "Olivia Harper",
      designation: "Gallery Attendant",
      image: "https://i.ibb.co/jV2yzqg/ethan.png",
    },
    {
      name: "Benjamin Clarke",
      designation: "Gallery Contemporary",
      image: "https://i.ibb.co/ZWZdxSv/ben.png",
    },
    {
      name: "Liam Sullivan",
      designation: "Gallery Sales",
      image: "https://i.ibb.co/gVM9QKC/olivia.png",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SectionTitle
        title="Our Team Member"
        desctiption="Our team of skilled professionals who are dedicated to providing exceptional service and quality products."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4">
        {teamMember.map((item) => (
          <div
            key={item.name}
            className="card border shadow-md dark:bg-yellow-50">
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
          </div>
        ))}
      </div>

      <AIChat />
    </div>
  );
};

export default OurTeamMember;
