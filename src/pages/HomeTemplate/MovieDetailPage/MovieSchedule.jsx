import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { format, addMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieSchedule(props) {
  const { movie } = props;
  const [cinema, setCinema] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (movie?.heThongRapChieu?.length > 0) {
      setCinema(movie?.heThongRapChieu[0]);
    }
  }, [movie]);

  const groupByDate = (lichChieuPhim) => {
    return lichChieuPhim.reduce((acc, item) => {
      const startDate = new Date(item.ngayChieuGioChieu);
      const ngay = format(startDate, "dd/MM/yyyy");
      const gioBatDau = format(startDate, "HH:mm");
      const gioKetThuc = format(
        addMinutes(startDate, item.thoiLuong || 120),
        "HH:mm"
      );

      if (!acc[ngay]) {
        acc[ngay] = [];
      }

      acc[ngay].push({
        maLichChieu: item.maLichChieu,
        gio: `${gioBatDau} ~ ${gioKetThuc}`,
      });

      return acc;
    }, {});
  };

  const listRap = () => {
    if (movie) {
      return movie.heThongRapChieu.map((cumRap) => {
        return (
          <button
            onClick={() => setCinema(cumRap)}
            key={cumRap.maHeThongRap}
            className="cursor-pointer flex flex-col items-center space-y-1 text-gray-700"
          >
            <img
              src={cumRap.logo}
              alt={cumRap.maHeThongRap}
              className="w-12 h-12 object-contain rounded-md border bg-[#fff]"
            />
            <span className="text-sm font-medium text-center text-black">
              {cumRap.tenHeThongRap}
            </span>
          </button>
        );
      });
    }
  };

  const handleBook = (id) => {
    navigate(`/ticket-detail/${id}`);
  };

  const cinemaCluster = () => {
    return cinema?.cumRapChieu.map((cumRapChieu, index) => {
      const groupedDates = groupByDate(cumRapChieu.lichChieuPhim || []);
      return (
        <Disclosure key={index}>
          <DisclosureButton className="cursor-pointer w-full flex justify-between items-start p-4 bg-white hover:bg-gray-50 transition border-b border-[#E7E4E6] mb-0">
            <div className="flex items-center">
              <img
                className="w-[32px] h-[32px] border border-[#E7E4E6] mr-2.5"
                src={cinema.logo}
                alt="logo"
              />
              <div>
                <h4 className="text-black font-semibold text-left">
                  {cumRapChieu.tenCumRap}
                </h4>
                <p className="text-sm text-gray-600">{cumRapChieu.diaChi}</p>
              </div>
            </div>
          </DisclosureButton>
          <DisclosurePanel className="text-gray-500 p-4 ">
            <h4 className="font-semibold text-gray-700 mb-3">2D Lồng tiếng</h4>
            {/* Hiển thị lịch chiếu theo ngày */}
            {Object.entries(groupedDates).map(([ngay, listGio]) => (
              <div key={ngay} className="mb-3">
                <p className="font-medium text-black">{ngay}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {listGio.map((lich) => (
                    <span
                      key={lich.maLichChieu}
                      onClick={() => handleBook(lich.maLichChieu)}
                      className="px-3 py-1 border border-blue-700 text-blue-700 rounded hover:bg-blue-500 hover:text-white cursor-pointer"
                    >
                      {lich.gio}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </DisclosurePanel>
        </Disclosure>
      );
    });
  };

  return (
    <div className="mx-auto w-full py-4 text-sm border-[#E7E4E6] mt-7 border col-span-4 rounded-lg">
      {/* Rạp */}
      <div className="relative flex justify-center gap-5 items-center overflow-x-auto py-4 px-2 border-[#E7E4E6] border-b pb-5">
        {listRap()}
      </div>

      {/* Danh sách rạp */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">{cinemaCluster()}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto table">
          Xem thêm
        </button>
      </div>
    </div>
  );
}
