import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img1 from "../assets/carousal/19dbf7533eb4c12309649634bcb786a99430a405.jpg";
import img2 from "../assets/carousal/7d6b9fd325e711f01f48b3669fafbbfba4b7e937.jpg";
import img3 from "../assets/carousal/90bc43b7eef7411089b64f3be63fd8756634c8d7.jpg";
import img4 from "../assets/carousal/bb063912fdc749ca3d8b610dba8aa3cb237bd494.jpg";
import img5 from "../assets/carousal/e3027d6c0381f6b051335d1232f65bc3e624c1cb.jpg";
import "swiper/css";

const images = [img1, img2, img3, img4, img5];
export default function Carousel() {
  const swiperRef = useRef(null);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={2}
      spaceBetween={16}
      loop={true}
      speed={10000}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      onInit={(swiper) => {
        swiper.wrapperEl.style.transitionTimingFunction = "linear";
      }}
      modules={[Autoplay]}
      onReachEnd={() => {
        if (swiperRef.current) {
          swiperRef.current.params.speed = 10000;
          swiperRef.current.slideToLoop(0);
          setTimeout(() => {
            swiperRef.current.params.speed = 10000;
          }, 600);
        }
      }}
      className="mySwiper"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`slide-${idx}`}
            className="w-full h-64 object-cover rounded-4xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
