import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 px-5">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl w-full">
        {/* Hình ảnh bên trái */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: 'url("../images/image_register.jpg")',
          }}
        >
          {/* Bạn có thể thay ảnh tại đây bằng ảnh của bạn */}
        </div>
        {/* Form đăng ký */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Đăng ký</h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tài khoản
              </label>
              <input
                type="text"
                placeholder="Nhập tài khoản"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Họ tên
              </label>
              <input
                type="text"
                placeholder="Họ tên đầy đủ"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-600">
                Tôi đồng ý với{" "}
                <a
                  href="#"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Điều khoản sử dụng
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Đăng ký
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Đã có tài khoản?{" "}
            <button
              href="#"
              className="cursor-pointer text-purple-600 font-medium hover:underline"
            >
              Đăng nhập
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
