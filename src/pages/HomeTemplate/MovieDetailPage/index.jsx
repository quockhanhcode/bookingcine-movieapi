import { useParams } from "react-router-dom";
import { format } from "date-fns";

import { useQuery } from "@tanstack/react-query";
import { movie_info } from "../../../service/movie.api";
import MovieShow from "./MovieShow";
import MovieSchedule from "./MovieSchedule";
import ModalDetails from "./ModalDetails";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";
// import "./style.css";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const { isOpenPopup } = useSelector((state) => state.homeSlice);

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["MOVIE_SCHEDULE_INFO"],
    queryFn: () => {
      return movie_info(movieId);
    },
  });

  return (
    <div className="mx-auto py-4 text-white">
      {/*  */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0">
          <img
            src={movie?.hinhAnh}
            alt="background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
          <div className="flex-shrink-0 w-full lg:w-[220px]">
            <div className="relative group">
              <img
                src={movie?.hinhAnh}
                alt="Movie Poster"
                className="rounded-lg shadow-lg w-full"
              />
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l12 6-12 6V4z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-2">
              {movie?.tenPhim}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
              <span className="bg-blue-600 px-2 py-0.5 rounded text-xs font-semibold">
                K
              </span>
              <span>{movie?.tenPhim}</span>
              <span>•</span>
              <span>2025</span>
              <span>•</span>
              <span>110 phút</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400 font-semibold mb-4">
              <svg
                className="w-5 h-5 text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.563 4.804a1 1 0 00.95.69h5.075c.969 0 1.371 1.24.588 1.81l-4.1 2.982a1 1 0 00-.364 1.118l1.563 4.804c.3.921-.755 1.688-1.538 1.118l-4.1-2.982a1 1 0 00-1.176 0l-4.1 2.982c-.783.57-1.838-.197-1.538-1.118l1.563-4.804a1 1 0 00-.364-1.118l-4.1-2.982c-.783-.57-.38-1.81.588-1.81h5.075a1 1 0 00.95-.69l1.563-4.804z" />
              </svg>
              <span className="text-white">{movie?.danhGia}</span>
            </div>
            <div className="text-gray-400 text-sm mb-3">
              <strong>Nội dung:</strong>
              {movie?.moTa}
              <a href="#" className="text-yellow-400 hover:underline">
                Xem thêm
              </a>
            </div>
            <div className="text-sm text-gray-300 mb-6">
              <div>
                <strong className="pr-3">Ngày chiếu:</strong>
                {movie?.ngayKhoiChieu
                  ? format(new Date(movie?.ngayKhoiChieu), "dd/MM/yyyy")
                  : ""}
              </div>
              <div>
                <strong>Thể loại:</strong> Bí ẩn, Hình sự, Hành động, Hoạt hình
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => dispatch(setOpenPopup(true))}
                className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l12 6-12 6V4z" />
                </svg>
                <span>Xem trailer</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16l-5-3-5 3-5-3-5 3V4z" />
                </svg>
                <span>Xem review</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-7 w-full max-w-7xl mx-auto">
        <MovieSchedule movie={movie} />
        <MovieShow />
      </div>
      <ModalDetails movie={movie} />
    </div>
  );
}
