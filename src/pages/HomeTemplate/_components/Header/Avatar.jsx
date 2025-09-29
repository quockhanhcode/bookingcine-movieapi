import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../../store/auth.slice";
import { useNavigate } from "react-router-dom";

export default function Avatar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <div>
      <img
        onClick={() => setOpen(!open)}
        id="avatarButton"
        type="button"
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg"
        alt="User dropdown"
      />
      {open && (
        <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <button
              onClick={handleLogout}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
