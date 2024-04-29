import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const FeaturedArtisanShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [artisans, setArtisans] = useState([]);

  const skills = [
    "Knitting & Crocheting",
    "Quilting",
    "Breadwork",
    "Embroidery",
    "Tie-dyeing",
    "Macrame",
  ];

  useEffect(() => {
    fetch(
      "https://textile-art-server-41133yyib-md-sujon-miahs-projects-5e83d33c.vercel.app/artisans"
    )
      .then((res) => res.json())
      .then((data) => {
        setArtisans(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rotateArtisans = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === artisans.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically rotate artisans every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      rotateArtisans();
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [rotateArtisans]);

  return (
    <section className="my-10 md:my-16">
      <div className="px-6">
        <div className="rounded-lg bg-yellow-400 px-8 py-16 md:px-20 xl:p-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="mb-10 md:order-2 md:mb-0 overflow-hidden w-full max-w-[400px]">
              <div>
                <img
                  className="w-full object-cover rounded-lg"
                  src={artisans[currentIndex]?.image}
                  alt={artisans[currentIndex]?.name}
                />
              </div>
              <p className="text-lg md:text-3xl text-center font-bold mt-2">
                {artisans[currentIndex]?.name}
              </p>
            </div>
            <div className="md:col-7 md:order-1 lg:col-6">
              <h2 className="mb-2 text-2xl md:text-4xl lg:text-5xl  sky-200xl font-extrabold">
                Meet Our Featured Artisan
              </h2>

              <p className="mb-6 h-20 text-base md:text-xl font-bold">
                Expert On{" "}
                <Typewriter
                  words={skills}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisanShowcase;
