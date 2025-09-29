import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../service/login.api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/auth.slice";

export default function Login() {
  const [values, setValue] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const queryClient = new QueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const {
    mutate,
    isLoading,
    isError,
    isSuccess,
    data: user,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      queryClient.invalidateQueries(["loginAPI"]);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(setUser(user));
        user.maLoaiNguoiDung === "QuanTri"
          ? navigate("/admin/dashboard")
          : navigate("/");
      }
    },
    onError: (error) => {
      console.error("Form submission error:", error);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(values);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-5xl overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2 bg-white items-center justify-center p-6">
          <img
            src="https://as2.ftcdn.net/v2/jpg/14/54/25/43/1000_F_1454254383_N4RU8sE7d1AgrbNEIdmXmS3RwSufGT0A.jpg"
            alt="Login Illustration"
            className="max-w-full h-full"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>

          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-blue-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="bg-[#E43F30] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center mb-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400">Hoặc</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              onChange={handleOnchange}
              placeholder="Tài Khoản"
              name="taiKhoan"
              value={values.taiKhoan}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              onChange={handleOnchange}
              type="password"
              placeholder="Mật Khẩu"
              name="matKhau"
              value={values.matKhau}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Ghi Nhớ
              </label>
              <a href="#" className="hover:underline">
                Quên mật khẩu
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow"
            >
              Đăng Nhập
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Tôi chưa có tài khoản?
            <a href="#" className="text-red-500 hover:underline font-semibold">
              Đăng kí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
