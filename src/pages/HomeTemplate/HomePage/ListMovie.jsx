import React, { useState } from "react";
import MovieItem from "./MovieItem";
import PaginationCustom from "../_components/PaginationCustom";
import { useQuery } from "@tanstack/react-query";
import { getListMovieApi } from "../../../service/movie.api";

export default function ListMovie() {
  const [page, setPage] = useState(1);
  const limit = 15;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["listMovieComming", page],
    queryFn: () => {
      return getListMovieApi("GP01", page, limit);
    },
    keepPreviousData: true,
  });

  const renDerMovie = () => {
    if (data) {
      return data.items.map((movie) => {
        return <MovieItem movie={movie} key={movie.maPhim} />;
      });
    }
  };
  // const totalPages = data?.totalPages || 1;

  const totalPages = Math.ceil(data?.totalCount / limit);
  return (
    <div className="relative bg-gray-50 pb-6 pt-6  md:py-14">
      <div className="max-w-screen-xl px-5 mx-auto md:px-7 xl:px-5">
        <div className="md:flex justify-between mb-6 md:mb-10">
          <h2 className="text-center text-xl text-[var(--mainColor)] md:text-2xl lg:text-3xl font-bold mb-3 md:mb-0">
            Tìm phim chiếu rạp trên CycberMovie
          </h2>
          <form className="md:max-w-sm">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-[var(--mainColor)] focus:border-[var(--mainColor)] "
                placeholder="Tìm theo tên phim..."
                required
              />
            </div>
          </form>
        </div>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:grid-cols-5 mb-5 md:mb-7">
          {renDerMovie()}
        </div>

        <PaginationCustom
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
}
