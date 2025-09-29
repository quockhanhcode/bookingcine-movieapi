import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getBannerApi } from "../../../service/movie.api";

export default function MainVisual() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["moviesBanner"],
    queryFn: getBannerApi,
  });

  const renDerBanner = () => {
    if (data) {
      return data.map((item) => {
        return (
          <SwiperSlide key={item.maBanner}>
            <img
              src={item.hinhAnh}
              alt="mainVisual"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        );
      });
    }
  };

  return (
    <div className="mainVisual">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ height: "min(calc(220/375*100vw) , 700px)" }}
        className="w-full  2xl:h-[calc(100vh-165px)]"
      >
        {renDerBanner()}
      </Swiper>
    </div>
  );
}
