import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";

export default function ConfirmSticket(props) {
  const { movie } = props;
  const dispatch = useDispatch();
  const { chair } = useSelector((state) => state.bookingSlice);
  const [ghe, setGhe] = useState([]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg space-y-4 lg:col-span-3">
      <h2 className="text-xl font-bold">{movie?.thongTinPhim?.tenPhim}</h2>
      <div className="max-w-sm p-6 bg-white rounded shadow space-y-4 text-gray-800 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>⏳</span>
            <span>Thời lượng</span>
          </div>
          <span className="font-semibold text-blue-900">113 phút</span>
        </div>
        <hr className="border-dashed border-gray-300" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>🏛️</span>
            <span>Rạp chiếu</span>
          </div>
          <span className="font-semibold text-blue-900 line-clamp-1">
            {movie?.thongTinPhim?.tenCumRap}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>Ngày chiếu</span>
          </div>
          <span className="font-semibold text-blue-900">
            {movie?.thongTinPhim?.ngayChieu}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>🕰️</span>
            <span>Giờ chiếu</span>
          </div>
          <span className="font-semibold text-blue-900">
            {movie?.thongTinPhim?.gioChieu}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>💺</span>
            <span>Ten Rap</span>
          </div>
          <span className="font-semibold text-blue-900">
            {movie?.thongTinPhim?.tenRap}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>🎟️</span>
            <span>Ghế ngồi</span>
          </div>
          <span className="font-semibold text-blue-900">
            {chair.map((item) => item.tenGhe).join("-")}
          </span>
        </div>
        <button
          type="button"
          onClick={() => dispatch(setOpenPopup(true))}
          className="w-full cursor-pointer bg-[#E82E96] hover:bg-[#E82E96] text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 mt-4"
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
}
