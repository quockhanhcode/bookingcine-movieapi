import { Eye, Star, SquarePen, Trash2, Plus } from "lucide-react";

import PaginationCustom from "../../HomeTemplate/_components/PaginationCustom";
import { useDispatch } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";
import AddMovie from "./AddMovie";
import { getListMovieApi } from "../../../service/movie.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import { deleteItem } from "../../../service/admin.api";
import Swal from "sweetalert2";
import { getButtonEdit } from "../../../store/auth.slice";
import { getMovieID } from "../../../store/admin.slice";

export default function MovieManagement() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const limit = 10;
  const {
    data: movie,
    isLoading: isLoadingMovies,
    isError: isLoadingError,
    error: errorMovies,
  } = useQuery({
    queryKey: ["listMovie", page],
    queryFn: () => getListMovieApi("GP04", page, limit),
    keepPreviousData: true,
  });

  const totalPages = Math.ceil(movie?.totalCount / limit);
  const {
    mutate: deleteMutation,
    isLoading: isDeleting,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries(["listMovie"]);
    },
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Bạn muốn xóa ?",
      text: "Dữ liệu này sẽ bị xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Thoát",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation(id);
        Swal.fire({
          title: "Dữ liệu đã bị xóa",
          text: "Xóa thành công",
          icon: "success",
        });
      }
    });
  };

  const handleGetMovieAPI = (item) => {
    dispatch(setOpenPopup(true));
    dispatch(getButtonEdit(false));
    dispatch(getMovieID(item));
  };

  const handleAddButton = () => {
    dispatch(setOpenPopup(true));
    dispatch(getButtonEdit(true));
  };

  return (
    <>
      <div className="rounded-xl border border-[#eee] p-4 shadow-sm lg:p-4 xl:p-4">
        <div className="flex justify-between">
          <div className="block w-[300px] lg:w-sm">
            <h2 className="mb-5 text-2xl font-bold text-gray-800 lg:mb-8 lg:text-3xl">
              Quản lý phim
            </h2>
            <div className="mb-6">
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-pink-400 focus:ring-pink-400"
                placeholder="Tìm kiếm phim"
              />
            </div>
          </div>
          <button
            onClick={() => handleAddButton()}
            className="flex h-full cursor-pointer items-center gap-1 rounded-md bg-[var(--mainColor)] p-2 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[var(--mainColor)] hover:shadow-[0_0_10px_#e396c1] md:px-3"
          >
            <Plus className="h-5 w-5" />
            <span className="hidden md:block">Thêm phim mới</span>
          </button>
        </div>

        <div className="w-full rounded-lg border border-[#eee] shadow-sm">
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full min-w-[840px] text-left text-sm text-gray-500">
              <thead className="bg-gray-50 text-center text-sm text-gray-500">
                <tr>
                  <th scope="col" className="w-[10%] px-6 py-4 text-left">
                    Poster
                  </th>
                  <th scope="col" className="w-[35%] px-3 py-4 text-left">
                    Tên phim
                  </th>
                  <th scope="col" className="w-[10%] px-3 py-4">
                    Đánh giá
                  </th>
                  <th scope="col" className="w-[16%] px-3 py-4">
                    Ngày phát hành
                  </th>
                  <th scope="col" className="w-[17%] px-3 py-4">
                    Trạng thái
                  </th>
                  <th scope="col" className="w-[17%] px-3 py-4">
                    Độ Hot
                  </th>
                  <th scope="col" className="w-[12%] px-3 py-4">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {movie &&
                  movie.items.length > 0 &&
                  movie.items.map((item) => {
                    return (
                      <tr
                        key={item.maPhim}
                        className="border-b border-gray-200 bg-white hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 pr-2">
                          <img
                            className="w-18 object-cover object-center"
                            src={item.hinhAnh}
                            alt={item.tenPhim}
                          />
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          <p className="line-clamp-1">{item.tenPhim}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-5 text-yellow-400" />
                            <span className="font-semibold text-black">
                              {item.danhGia}/10
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-center text-gray-500">
                            {format(item.ngayKhoiChieu, "dd/MM/yyyy")}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`mx-auto block w-fit rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
                              item.dangChieu === true
                                ? "bg-green-100 text-green-800"
                                : "bg-[#FCB53B] text-white"
                            }`}
                          >
                            {item.dangChieu === true
                              ? "Đang Chiếu"
                              : "Sắp Chiếu"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="mx-auto table">
                            <svg
                              className={`h-6 w-6 dark:text-white ${
                                item.hot === true
                                  ? "text-yellow-500"
                                  : "text-gray-800"
                              }`}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                            </svg>
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-center gap-3">
                            <Eye className="w-5 cursor-pointer text-blue-500 transition-all duration-300 hover:text-blue-800" />
                            <SquarePen
                              onClick={() => handleGetMovieAPI(item.maPhim)}
                              className="w-5 cursor-pointer text-yellow-500 transition-all duration-300 hover:text-yellow-800"
                            />
                            <Trash2
                              onClick={() => handleDelete(item.maPhim)}
                              className="w-5 cursor-pointer text-red-500 transition-all duration-300 hover:text-red-800"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 px-6 py-5 lg:flex-row">
            <p className="text-center text-sm text-gray-500">
              Hiển thị {limit} phim mỗi trang{" "}
              <span className="hidden sm:inline-block">-</span>{" "}
              <br className="sm:hidden" /> Tổng cộng 50 phim
            </p>
            <PaginationCustom
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(p) => setPage(p)}
            />
          </div>
        </div>
      </div>

      <AddMovie />
    </>
  );
}
