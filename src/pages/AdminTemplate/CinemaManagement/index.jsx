import React, { useState } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getmovieTheater } from "../../../service/admin.api";
import { Circle, Film, Filter, MoreVertical, Plus, Search } from "lucide-react";

export default function CinemaManagement() {
  const queryClient = new QueryClient();

  const [searchTerm, setSearchTerm] = useState("");

  const { data: cinemaData } = useQuery({
    queryKey: ["get-movie-theater"],
    queryFn: getmovieTheater,
  });

  const filteredCinemas = cinemaData?.filter(
    (cinema) =>
      cinema.tenHeThongRap.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cinema.maHeThongRap.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cinema.biDanh.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-3">
              <Film className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Hệ thống rạp chiếu phim
              </h1>
              <p className="mt-1 text-gray-600">
                Quản lý các hệ thống rạp trong hệ thống
              </p>
            </div>
          </div>
        </div>

        {/* Search and Action Bar */}
        <div className="mb-6 rounded-xl bg-white p-4 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative w-full flex-1">
              <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên, mã, bí danh..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 transition hover:bg-gray-50">
                <Filter className="h-5 w-5" />
                Lọc
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-white shadow-md transition hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-5 w-5" />
                Thêm mới
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border-l-4 border-blue-500 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">Tổng hệ thống</p>
                <p className="text-3xl font-bold text-gray-900">
                  {cinemaData?.length}
                </p>
              </div>
              <div className="rounded-lg bg-blue-100 p-3">
                <Film className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-green-500 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">Đang hoạt động</p>
                <p className="text-3xl font-bold text-gray-900">
                  {cinemaData?.length}
                </p>
              </div>
              <div className="rounded-lg bg-green-100 p-3">
                <div className="h-6 w-6 rounded-full bg-green-600"></div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-purple-500 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-600">Kết quả tìm kiếm</p>
                <p className="text-3xl font-bold text-gray-900">
                  {filteredCinemas?.length}
                </p>
              </div>
              <div className="rounded-lg bg-purple-100 p-3">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Cinema Grid - Desktop */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {filteredCinemas?.map((cinema) => (
            <div
              key={cinema.maHeThongRap}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                <img
                  src={cinema.logo}
                  alt={cinema.tenHeThongRap}
                  className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <button className="rounded-lg bg-white p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                    <MoreVertical className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      {cinema.tenHeThongRap}
                    </h3>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                      Active
                    </span>
                  </div>
                </div>

                <div className="mb-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-20 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      Mã:
                    </span>
                    <span className="rounded bg-gray-100 px-3 py-1 font-mono text-sm font-semibold text-gray-900">
                      {cinema.maHeThongRap}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="w-20 pt-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      Bí danh:
                    </span>
                    <span className="flex-1 text-sm break-all text-gray-700">
                      {cinema.biDanh}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 border-t border-gray-100 pt-4">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 font-medium text-blue-600 transition hover:bg-blue-100">
                    <div className="h-4 w-4" />
                    Sửa
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 font-medium text-red-600 transition hover:bg-red-100">
                    <div className="h-4 w-4" />
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinema List - Mobile */}
        <div className="space-y-4 md:hidden">
          {filteredCinemas?.map((cinema) => (
            <div
              key={cinema.maHeThongRap}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <div className="flex items-center gap-4 bg-gradient-to-r from-gray-50 to-gray-100 p-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                  <img
                    src={cinema.logo}
                    alt={cinema.tenHeThongRap}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    {cinema.tenHeThongRap}
                  </h3>
                  <span className="inline-block rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                    Active
                  </span>
                </div>
              </div>

              <div className="space-y-3 p-4">
                <div>
                  <p className="mb-1 text-xs font-semibold text-gray-500">
                    Mã hệ thống
                  </p>
                  <p className="inline-block rounded bg-gray-100 px-3 py-1.5 font-mono font-semibold text-gray-900">
                    {cinema.maHeThongRap}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold text-gray-500">
                    Bí danh
                  </p>
                  <p className="text-gray-700">{cinema.biDanh}</p>
                </div>
              </div>

              <div className="flex gap-2 border-t border-gray-100 p-4">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 font-medium text-blue-600 transition hover:bg-blue-100">
                  <div className="h-4 w-4" />
                  Sửa
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 font-medium text-red-600 transition hover:bg-red-100">
                  <div className="h-4 w-4" />
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCinemas?.length === 0 && (
          <div className="rounded-xl bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <div className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Không tìm thấy kết quả
            </h3>
            <p className="text-gray-600">
              Không có hệ thống rạp nào phù hợp với tìm kiếm của bạn
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredCinemas?.length > 0 && (
          <div className="mt-6 flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-gray-600">
              Hiển thị{" "}
              <span className="font-semibold">{filteredCinemas.length}</span>{" "}
              trong tổng số{" "}
              <span className="font-semibold">{cinemaData?.length}</span> hệ
              thống rạp
            </p>
            <div className="flex gap-2">
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-50">
                Trước
              </button>
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white shadow-md">
                1
              </button>
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-50">
                2
              </button>
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-50">
                Sau
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
