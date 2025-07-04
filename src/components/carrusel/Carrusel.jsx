import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    src: "https://cdn.billowshop.com/5ec5b14b-5b35-b294/modulos/50-off-banners-ok-desktop-copia-21-68648be3edba4.webp",
    alt: "Look verano",
  },
  {
    src: "https://cdn.billowshop.com/5ec5b14b-5b35-b294/modulos/50-off-banners-ok-desktop-68648fe72c851.webp",
    alt: "Look fiesta",
  },
  {
    src: "https://www.clarin.com/2025/06/23/uChbTizkV_2000x1500__1.jpg",
    alt: "Look casual",
  },
];

const Carousel = () => (
  <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      centeredSlides
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      className="rounded-xl overflow-hidden shadow-lg"
    >
      {slides.map(({ src, alt }) => (
        <SwiperSlide key={src}>
          <img src={src} alt={alt} className="w-full h-[400px] object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
