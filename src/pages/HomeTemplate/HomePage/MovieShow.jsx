import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PopupMovie from "./PopupMovie";
import MovieItem from "./MovieItem";
import { useQuery } from "@tanstack/react-query";
import { getListMovieApi } from "../../../service/movie.api";

export default function MovieShow() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["listMovieShow"],
    queryFn: () => {
      return getListMovieApi("GP01", 1, 100);
    },
  });

  const renDerMovie = () => {
    if (data) {
      return data.items.map((movie) => {
        return (
          movie.dangChieu && (
            <SwiperSlide key={movie.maPhim}>
              <MovieItem movie={movie} />
            </SwiperSlide>
          )
        );
      });
    }
  };
  return (
    <div className="movieShow text-white py-8 md:py-10 lg:py-14 bg-[url(/images/movie_show_bg.jpg)] bg-bottom">
      <div className="max-w-screen-xl px-5 mx-auto md:px-7 xl:px-5">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-5 md:mb-8">
          Phim đang chiếu
        </h2>
        <div className="relative">
          <div className="movieShow-prev shadow-md shadow-gray-400 w-8 h-8 md:w-11 md:h-11 bg-white rounded-full content-center cursor-pointer absolute inset-y-0 left-[-15px] md:left-[-22px] z-2 my-auto transition-all duration-300 group hover:bg-[var(--mainColor)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 md:h-6 md:w-6 text-black m-auto transition-all duration-300 group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
                className="jsx-de1540fc10b2e2a"
              />
            </svg>
          </div>
          <div className="movieShow-next shadow-md shadow-gray-400 w-8 h-8 md:w-11 md:h-11 bg-white rounded-full content-center cursor-pointer absolute inset-y-0 right-[-15px] md:right-[-22px] z-2 my-auto transition-all duration-300 group hover:bg-[var(--mainColor)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 md:h-6 md:w-6 text-black m-auto transition-all duration-300 group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
                className="jsx-de1540fc10b2e2a"
              />
            </svg>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={{
              nextEl: ".movieShow-next",
              prevEl: ".movieShow-prev",
            }}
            loop={false}
            className="w-full"
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {renDerMovie()}
          </Swiper>
        </div>
      </div>

      <PopupMovie />
    </div>
  );
}
