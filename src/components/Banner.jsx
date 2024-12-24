// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/slide1.jpg"
              alt="Marathon Management"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h2 className="text-[#0db496] text-2xl font-bold text-center px-4">
                Join the Marathon Management System and Register for Events
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/slide2.jpg"
              alt="Diverse Team Collaboration"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h2 className="text-[#0db496] text-2xl font-bold text-center px-4">
                Manage Your Marathon Participation Seamlessly
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/slide3.jpg"
              alt="Strategic Discussion"
              className="w-full h-[400px] object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h2 className="text-[#0db496] text-2xl font-bold text-center px-4">
                Register, Track, and Manage Your Marathons Efficiently
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
