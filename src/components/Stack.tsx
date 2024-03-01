import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { technologyImage } from "../utils/technology";
import "swiper/css";

export function Stack() {
  return (
    <Swiper
      slidesPerView={6}
      loop
      speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
    >
      {technologyImage.map((technology) => (
        <SwiperSlide key={technology.id}>
          <img
            className="h-10 w-10 rounded-lg"
            src={technology.image}
            alt={technology.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
