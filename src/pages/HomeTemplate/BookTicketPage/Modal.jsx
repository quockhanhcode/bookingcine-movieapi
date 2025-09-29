import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { setOpenPopup } from "../../../store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { booking_sticket } from "../../../service/movie.api";
import { useParams } from "react-router-dom";
import { resetTicket } from "../../../store/bookingSlice";

export default function Modal(props) {
  const { movie } = props;
  const { maLichChieu } = useParams();

  const queryClient = useQueryClient();
  const { isOpenPopup } = useSelector((state) => state.homeSlice);
  const { chair } = useSelector((state) => state.bookingSlice);
  const dispatch = useDispatch();

  const totalPay = chair.reduce((acc, curr) => {
    return acc + curr.giaVe;
  }, 0);

  const { mutate, isLoading, isError, isSuccess, error } = useMutation({
    mutationFn: booking_sticket,
    onSuccess: () => {
      // Invalidate or update related queries after a successful mutation
      queryClient.invalidateQueries({
        queryKey: ["ticket-detail", maLichChieu],
      });
      dispatch(resetTicket());
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  const handlePay = () => {
    dispatch(setOpenPopup(false));
    const danhSachVe = chair.map((item) => {
      return {
        maGhe: item.maGhe,
        giaVe: item.giaVe,
      };
    });
    const payload = {
      maLichChieu: movie?.thongTinPhim.maLichChieu,
      danhSachVe: danhSachVe,
    };
    mutate(payload);
  };

  return (
    <Transition appear show={isOpenPopup} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(setOpenPopup(false))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="max-w-md mx-auto p-6 rounded-lg bg-gray-900 shadow-lg">
                  <h2 className="text-2xl font-semibold text-[#E82E96] text-center mb-6">
                    Xác nhận thông tin đặt vé
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-purple-400">Tên phim</span>
                      <span className="text-white">
                        {movie?.thongTinPhim?.tenPhim}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-purple-400">Tên rạp chiếu</span>
                      <span className="text-white">
                        {movie?.thongTinPhim?.tenCumRap}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-purple-400">Địa chỉ</span>
                      <span className="text-right text-white">
                        {movie?.thongTinPhim?.diaChi}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-purple-400">Rạp chiếu</span>
                      <span className="text-white">
                        {movie?.thongTinPhim?.tenRap}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-purple-400">Ngày chiếu</span>
                      <span className="text-white">
                        {movie?.thongTinPhim?.ngayChieu}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-purple-400">Giờ chiếu</span>
                      <span className="text-white">
                        {movie?.thongTinPhim?.gioChieu}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-purple-400">Ghế ngồi</span>
                      <span className="text-white">
                        {chair.map((item) => item.tenGhe).join("-")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-400">Giá vé</span>
                      <span className="text-white">
                        {totalPay.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handlePay}
                    className="cursor-pointer mt-6 w-full bg-gradient-to-r bg-[#E82E96] to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white py-2 rounded-md transition duration-300"
                  >
                    Xác nhận & Thanh toán
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
