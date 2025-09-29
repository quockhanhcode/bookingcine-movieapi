import { useMutation, useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { ticket_detail } from "../../../service/movie.api";
import ConfirmSticket from "./ConfirmSticket";
import { useDispatch, useSelector } from "react-redux";

import { addTicket } from "../../../store/bookingSlice";
import Modal from "./Modal";

export default function BookTicketPage() {
  const { chair } = useSelector((state) => state.bookingSlice);

  const dispatch = useDispatch();
  const { maLichChieu } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["ticket-detail", maLichChieu],
    queryFn: () => {
      return ticket_detail(maLichChieu);
    },
  });

  const handleAddChair = (listChair) => {
    dispatch(addTicket(listChair));
  };

  const listSeat = () => {};
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-8">
        <div className="md:col-span-2 lg:col-span-5 space-y-6 overflow-scroll lg:overflow-auto">
          <div className="border-b border-gray-600 pb-2 text-center">
            <div className="text-sm text-gray-400 mb-2">Màn hình</div>
            <div className="w-full h-1 bg-gray-500" />
          </div>
          <div className=" bg-gray-900 flex items-center justify-center">
            <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
              {movie?.danhSachGhe.map((item) => {
                const isSelected = chair.some((c) => c.maGhe === item.maGhe);
                const seatClass = `${
                  item.daDat
                    ? "bg-gray-300"
                    : item.loaiGhe === "Vip"
                    ? "bg-red-500"
                    : "bg-purple-600"
                } relative cursor-pointer rounded-sm w-10 h-10 text-sm font-medium flex items-center justify-center transition`;
                return (
                  <label
                    key={item.tenGhe}
                    className={`${seatClass} ${
                      item.daDat ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <input
                      checked={isSelected}
                      type="checkbox"
                      disabled={item.daDat === true}
                      className="hidden peer"
                      onChange={() => handleAddChair(item)}
                    />
                    <span
                      className={`absolute inset-0 flex items-center rounded-sm justify-center peer-checked:bg-pink-400 peer-checked:text-white ${
                        isSelected ? "bg-purple-600" : ""
                      }`}
                    >
                      {item.tenGhe}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <div color="gray-700" label="Đã đặt" />
            <div color="pink-400" label="Ghế bạn chọn" />
            <div color="purple-600" label="Ghế thường" />
            <div color="red-500" label="Ghế VIP" />
          </div>
          <div className="border-t-4 border-orange-400 p-4 bg-white rounded shadow text-gray-800 flex flex-wrap gap-6 items-center justify-start">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gray-300" />
              <span>Ghế đã bán</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-pink-400" />
              <span>Ghế đang chọn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-purple-600" />
              <span>Ghế thường</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-red-500" />
              <span className="text-blue-600 font-medium">Ghế VIP</span>
            </div>
          </div>
        </div>
        {/*  */}
        <ConfirmSticket movie={movie} />
        <Modal movie={movie} />
      </div>
    </div>
  );
}
