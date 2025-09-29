import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { clearUser } from "../../store/auth.slice";

export default function AdminTemplate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearUser());
    navigate("/login");
  };
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="#" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold md:text-2xl whitespace-nowrap ">
                  CycberMovie
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 w-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm "
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 " role="none">
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate "
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Bảng điều khiển
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Cài đặt
                      </Link>
                    </li>
                    <li className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                      <button onClick={handleLogout} role="menuitem">
                        Đăng xuất
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="ml-3 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        // className="fixed top-0 left-0 z-40 w-64  h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 "
        className="fixed top-0 left-0 z-40 w-64 md:w-54 lg:w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="dashboard"
                className="[&.active]:bg-[var(--mainColor)] [&.active]:text-white [&.active>svg]:text-white flex items-center p-2 text-gray-900 rounded-lg transition duration-200 hover:bg-[var(--mainColor)] hover:text-white group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-200 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 transition duration-200">
                  Bảng điều khiển
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="movie-management"
                className="[&.active]:bg-[var(--mainColor)] [&.active]:text-white [&.active>svg]:text-white flex items-center p-2 text-gray-900 rounded-lg transition duration-200 hover:bg-[var(--mainColor)] hover:text-white group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-200 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-1 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm2-5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm4 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Quản lí phim
                </span>
                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full ">
                  Pro
                </span> */}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cinema-management"
                className="[&.active]:bg-[var(--mainColor)] [&.active]:text-white [&.active>svg]:text-white flex items-center p-2 text-gray-900 rounded-lg transition duration-200 hover:bg-[var(--mainColor)] hover:text-white group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-200 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Danh sách rạp
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">
                  3
                </span> */}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="user-management"
                className="[&.active]:bg-[var(--mainColor)] [&.active]:text-white [&.active>svg]:text-white flex items-center p-2 text-gray-900 rounded-lg transition duration-200 hover:bg-[var(--mainColor)] hover:text-white group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-200 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Người dùng
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="ticket-management"
                className="[&.active]:bg-[var(--mainColor)] [&.active]:text-white [&.active>svg]:text-white flex items-center p-2 text-gray-900 rounded-lg transition duration-200 hover:bg-[var(--mainColor)] hover:text-white group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-200 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 5a2 2 0 0 0-2 2v2.5a1 1 0 0 0 1 1 1.5 1.5 0 1 1 0 3 1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1 1.5 1.5 0 1 1 0-3 1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H4Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Quản lí đặt vé
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="showtime-management"
                className="[&.active]:bg-[var(--mainColor)] [&.active]:text-white [&.active>svg]:text-white flex items-center p-2 text-gray-900 rounded-lg transition duration-200 hover:bg-[var(--mainColor)] hover:text-white group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-200 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Lịch chiếu
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      {/* md:w-54 lg:w-64 */}
      <div className="p-4 md:ml-54 lg:ml-64 h-full mt-16 md:mt-14">
        <Outlet />
      </div>
    </div>
  );
}
