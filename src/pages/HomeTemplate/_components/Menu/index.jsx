import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 lg:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink
          to="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87]"
        >
          Trang chủ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/list-movie"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87]"
        >
          Phim chiếu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87]"
        >
          Rạp phim
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87]"
        >
          Blog phim
        </NavLink>
      </li>
      <li className="lg:hidden">
        <NavLink
          to="/login"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87]"
        >
          Đăng nhập
        </NavLink>
      </li>
      <li className="lg:hidden">
        <NavLink
          to="/register"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87]"
        >
          Đăng ký
        </NavLink>
      </li>
    </ul>
  );
}
