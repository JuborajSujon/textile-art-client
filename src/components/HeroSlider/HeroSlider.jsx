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
        <div className="relative h-[70vh] w-full bg-[url('https://isaw.nyu.edu/home-slides/textiles-slider-sm.jpg/image')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6 ">
                  Easy way to find your <br /> dream property
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
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
        <div className="relative h-[70vh] w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrD32QPa2OzMSNHoj2Bb9SEEhS_tc2bB9KvT91-YYkyQ&s')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6 ">
                  We will help you find <br /> your Wonderful home
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
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
        <div className="relative h-[70vh] w-full bg-[url('https://www.shutterstock.com/image-illustration/photo-wallpaper-mural-feather-popular-600w-1985022236.jpg')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6 ">
                  Special offers or deals
                  <br /> Select properties
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
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
