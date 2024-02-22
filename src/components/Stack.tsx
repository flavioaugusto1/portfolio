import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function Stack() {
  return (
    <Swiper
      slidesPerView={6}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      className="flex h-10 after:blur-lg before:blur-md"
    >
      <SwiperSlide>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
