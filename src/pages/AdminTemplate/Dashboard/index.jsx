export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8 xl:p-10 border border-[#eee] rounded-xl shadow-sm ">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">
        Tổng quan
      </h2>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-7 mb-8 xl:mb-12">
        <div className="flex-col-reverse sp375:flex-row relative px-3 py-3 lg:py-5 lg:px-6 border border-[#eee] rounded-xl shadow-sm flex justify-between items-center gap-2 md:gap-5">
          <div className="block text-center sp375:text-left space-y-0.5">
            <p className="text-gray-500 text-sm lg:text-base font-medium">
              Tổng phim
            </p>
            <p className="font-bold text-lg lg:text-2xl text-gray-800">48</p>
            <p className="text-green-600 text-sm">+12%</p>
          </div>
          <div className="bg-blue-600 aspect-square w-10 lg:w-12 flex items-center justify-center rounded-lg">
            <svg
              className="w-6 h-6 text-white transition duration-200"
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
          </div>
        </div>

        <div className="flex-col-reverse sp375:flex-row relative px-3 py-3 lg:py-5 lg:px-6 border border-[#eee] rounded-xl shadow-sm flex justify-between items-center gap-2 md:gap-5">
          <div className="block text-center sp375:text-left space-y-0.5">
            <p className="text-gray-500 text-sm lg:text-base font-medium">
              Vé đã bán
            </p>
            <p className="font-bold text-lg lg:text-2xl text-gray-800">2,156</p>
            <p className="text-green-600 text-sm">+23%</p>
          </div>
          <div className="bg-green-500 aspect-square w-10 lg:w-12 flex items-center justify-center rounded-lg">
            <svg
              className="w-5 h-5 text-white transition duration-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 5a2 2 0 0 0-2 2v2.5a1 1 0 0 0 1 1 1.5 1.5 0 1 1 0 3 1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1 1.5 1.5 0 1 1 0-3 1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H4Z" />
            </svg>
          </div>
        </div>

        <div className="flex-col-reverse sp375:flex-row relative px-3 py-3 lg:py-5 lg:px-6 border border-[#eee] rounded-xl shadow-sm flex justify-between items-center gap-2 md:gap-5">
          <div className="block text-center sp375:text-left space-y-0.5">
            <p className="text-gray-500 text-sm lg:text-base font-medium">
              Người dùng
            </p>
            <p className="font-bold text-lg lg:text-2xl text-gray-800">
              12,341
            </p>
            <p className="text-green-600 text-sm">+8%</p>
          </div>
          <div className="bg-purple-500 aspect-square w-10 lg:w-12 flex items-center justify-center rounded-lg">
            <svg
              className="w-5 h-5 text-white transition duration-200 group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
          </div>
        </div>

        <div className="flex-col-reverse sp375:flex-row relative px-3 py-3 lg:py-5 lg:px-6 border border-[#eee] rounded-xl shadow-sm flex justify-between items-center gap-2 md:gap-5">
          <div className="block text-center sp375:text-left space-y-0.5">
            <p className="text-gray-500 text-sm lg:text-base font-medium">
              Doanh thu
            </p>
            <p className="font-bold text-lg lg:text-2xl text-gray-800">485M</p>
            <p className="text-green-600 text-sm">+15%</p>
          </div>
          <div className="bg-yellow-500 aspect-square w-10 lg:w-12 flex items-center justify-center rounded-lg">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134Zm1.884.573.003.008c-.003-.005-.003-.008-.003-.008Zm.55 2.613s-.002-.002-.003-.007a.032.032 0 0 1 .003.007ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex gap-5 flex-col xl:flex-row xl:gap-10">
        <div className="p-5 lg:p-9 border border-[#eee] rounded-xl shadow-sm w-full xl:w-[60%]">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Phim mới nhất
          </h2>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[570px] text-gray-500 ">
              <thead className=" text-gray-700  bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-3 py-3 w-[60%]">
                    Tên phim
                  </th>
                  <th scope="col" className="px-3 py-3 w-[20%]">
                    Đánh giá
                  </th>
                  <th scope="col" className="px-3 py-3 w-[20%]">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  border-gray-200">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900"
                  >
                    Apple MacBook Pro 17"asdasdasdasdas
                  </th>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-6 h-6 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                        />
                      </svg>
                      <span className="font-semibold text-black">8.8</span>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Sắp chiếu
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-200">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900"
                  >
                    Apple MacBook Pro 17"asdasdasdasdas
                  </th>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-6 h-6 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                        />
                      </svg>
                      <span className="font-semibold text-black">8.8</span>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full ">
                      Đang chiếu
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-5 lg:p-9 border border-[#eee] rounded-xl shadow-sm w-full xl:w-[40%]">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Đặt vé gần đây
          </h2>
          <ul
            role="list"
            className=" divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <span className="text-green-600 text-md font-semibold">
                  180.000đ
                </span>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <span className="text-green-600 text-md font-semibold">
                  180.000đ
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
