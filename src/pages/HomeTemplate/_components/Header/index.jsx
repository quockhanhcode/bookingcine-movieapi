import { Link } from "react-router-dom";
import Menu from "../Menu";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state.authSlice);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-[1536px] flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-1.5 lg:space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap ">
            CycberMovie
          </span>
        </Link>
        <div className="flex items-center lg:order-2 space-x-2 lg:space-x-0 rtl:space-x-reverse">
          {user ? (
            <Avatar />
          ) : (
            <div className="hidden lg:flex items-center">
              <Link
                to="/login"
                className=" flex items-center font-medium text-sm  cursor-pointer transition-all hover:text-[var(--mainColor)] hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-[24px] md:w-[20px] mr-1"
                >
                  <path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z" />
                </svg>
                Đăng nhập
              </Link>
              <span className="mx-1 lg:mx-2">/</span>
              <Link
                to="/register"
                className="flex items-center font-medium text-sm  cursor-pointer transition-all hover:text-[var(--mainColor)] hover:underline"
              >
                Đăng ký
              </Link>
            </div>
          )}

          {/* <Avatar /> */}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center  w-8 h-8 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100   "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-sticky"
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
}
