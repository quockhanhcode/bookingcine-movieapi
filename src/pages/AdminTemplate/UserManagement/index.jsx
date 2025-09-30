import React, { useState } from "react";
import { getDataUser } from "../../../service/admin.api";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getTypeUser } from "../../../store/admin.slice";

export default function UserManagement() {
  const { fillterUser } = useSelector((state) => state.adminSlice);

  const dispatch = useDispatch();

  const { data: user } = useQuery({
    queryKey: ["getDataUser"],
    queryFn: () => getDataUser(),
  });

  const typeUser = user?.reduce((acc, curr) => {
    const item = curr.maLoaiNguoiDung.toLowerCase();
    if (!acc[item]) {
      acc[item] = [];
    }
    acc[item].push(curr);
    return acc;
  }, {});
  const userTypes = typeUser ? Object.keys(typeUser) : [];
  const selectedUser = fillterUser ? typeUser?.[fillterUser] || [] : user || [];

  const handleUser = (user) => {
    dispatch(getTypeUser(user));
  };

  return (
    <div>
      <div className="mx-auto p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-center text-3xl font-extrabold text-indigo-700">
            Danh Sách Người Dùng
          </h1>

          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Loại Người Dùng
            <svg
              className="ms-3 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200 onHide"
              aria-labelledby="dropdownDefaultButton"
            >
              {userTypes.map((item, key) => {
                return (
                  <li key={key} onClick={() => handleUser(item)}>
                    <span className="block cursor-pointer px-4 py-2 font-bold uppercase hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          id="dropdown"
          className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </span>
            </li>
          </ul>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-2xl">
          <table className="min-w-full rounded-lg bg-white">
            <thead>
              <tr className="bg-indigo-600 text-sm leading-normal text-white uppercase">
                <th className="px-6 py-4 text-left">Avatar</th>
                <th className="px-6 py-4 text-left">Tài Khoản</th>
                <th className="px-6 py-4 text-left">Họ Tên</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Số Điện Thoại</th>
                <th className="px-6 py-4 text-left">Mật Khẩu</th>
                <th className="px-6 py-4 text-left">Mã Loại Người Dùng</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {selectedUser?.map((item, key) => {
                return (
                  <tr
                    key={key}
                    className="border-b border-gray-200 transition-colors duration-200 hover:bg-indigo-50"
                  >
                    <td className="px-6 py-4">
                      <svg
                        className="h-6 w-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 font-medium text-indigo-800">
                      {item.taiKhoan}
                    </td>
                    <td className="px-6 py-4">{item.hoTen}</td>
                    <td className="px-6 py-4 text-blue-600">{item.email}</td>
                    <td className="px-6 py-4">{item.soDT}</td>
                    <td className="px-6 py-4 text-gray-500">{item.matKhau}</td>
                    <td className="flex justify-center px-6 py-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 ${
                          item.maLoaiNguoiDung === "QuanTri"
                            ? "bg-red-600 text-white"
                            : "bg-indigo-100 text-indigo-800"
                        } `}
                      >
                        {item.maLoaiNguoiDung}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
