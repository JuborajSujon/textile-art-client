import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}>
      <SwiperSlide>
        <div className="relative h-[70vh] w-full bg-[url('https://i.ibb.co/Hqr549Y/Hero2.jpg')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6 ">
                  Explore the Tapestry of <br /> Textile Creations
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  Wrap yourself in warmth and style with our handcrafted knits
                  and crochets. Our artisanal creations blend comfort with
                  timeless elegance.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="btn text-lg border-yellow-600 bg-yellow-600 hover:bg-yellow-400 text-white hover:text-slate-900 rounded-md">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[70vh] w-full bg-[url('https://i.ibb.co/sR5rXLw/Hero3.jpg')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6 ">
                  Where Creativity Weaves <br /> its Magic
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  Experience the mesmerizing beauty of beadwork as tiny beads
                  come together to form intricate patterns and dazzling designs.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="btn text-lg border-yellow-600 bg-yellow-600 hover:bg-yellow-400 text-white hover:text-slate-900 rounded-md">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[70vh] w-full bg-[url('https://i.ibb.co/wRv62Nf/Hero1.jpg')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6 ">
                  Unveiling the Artisanal
                  <br /> World of Textile Mastery
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  Elevate your space with the timeless charm of macrame. Our
                  hand-knotted creations blend modern design with bohemian
                  flair, adding texture and personality to any room.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="btn text-lg border-yellow-600 bg-yellow-600 hover:bg-yellow-400 text-white hover:text-slate-900 rounded-md">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
