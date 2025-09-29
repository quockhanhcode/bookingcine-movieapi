import React from "react";

export default function PaginationCustom(props) {
  const { currentPage, totalPages, onPageChange } = props;

  const pages = [];
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, currentPage + 1);
  if (start > 1) pages.push("...");
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  if (end < totalPages - 1) pages.push("...");
  if (end < totalPages) pages.push(totalPages);
  return (
    <ul className="pagination flex flex-nowrap items-center justify-center space-x-2 text-sm">
      <li className="pagination-prev pagination-disable">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </li>
      {pages.map((p, i) => {
        return (
          <li key={i}>
            {p === "..." ? (
              <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-500 shadow-sm focus:outline-none">
                ...
              </button>
            ) : (
              <button
                onClick={() => onPageChange(p)}
                className={`
                ${
                  currentPage === p
                    ? "pagination-active bg-black text-white font-bold"
                    : ""
                }
              hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 text-gray-700  focus:outline-none `}
              >
                {p}
              </button>
            )}
          </li>
        );
      })}
      <li className="pagination-next">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className=" hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700 shadow-sm focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </li>
      <li className="rc-pagination-options" />
    </ul>
  );
}
