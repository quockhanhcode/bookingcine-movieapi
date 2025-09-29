import { Dialog, DialogPanel } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetailApi } from "../../../service/movie.api";

export default function PopupMovie() {
  const { isOpenPopup, movieDetail } = useSelector((state) => state.homeSlice);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["detailMovie", movieDetail],
    queryFn: () => {
      return getMovieDetailApi(movieDetail);
    },
    enabled: !!movieDetail,
  });

  const dispatch = useDispatch();
  return (
    <Dialog
      open={isOpenPopup}
      onClose={() => dispatch(setOpenPopup(false))}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#0009]">
        <DialogPanel className="max-w-3xl w-full bg-[#191617] text-white rounded-lg relative">
          <div
            className="absolute top-[-20px] right-[-20px] cursor-pointer"
            onClick={() => dispatch(setOpenPopup(false))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
              className="h-10 w-10 text-white opacity-80 hover:opacity-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="aspect-video bg-yellow-50 rounded-t-lg">
            <iframe
              width="100%"
              height="100%"
              src={data?.trailer.replace("watch?v=", "embed/")}
              title={data?.tenPhim}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex p-5 gap-5">
            <div className="w-20 flex-shrink-0">
              <div className="relative aspect-w-7 aspect-h-10 w-full">
                <img
                  src={data?.hinhAnh}
                  className="absolute inset-0 object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div className="block">
              <p className="font-bold text-xl mb-2">{data?.tenPhim}</p>
              <p className="text-sm font-bold opacity-70 text-white mb-2">
                - Hoạt Hình, Hình Sự, Bí Ẩn, Hành Động
              </p>
              <p className="text-sm opacity-70">{data?.moTa}</p>

              <div className="flex items-center gap-2 mt-4">
                <button className="text-white bg-[var(--mainColor)] hover:bg-[#991d61] font-medium rounded-md transition-all duration-300 cursor-pointer text-sm px-5 py-2.5">
                  Đặt vé
                </button>
                <button
                  className="text-white bg-[#796b73] hover:bg-[#574d53] font-medium rounded-md transition-all duration-300 cursor-pointer text-sm px-5 py-2.5"
                  onClick={() => dispatch(setOpenPopup(false))}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
