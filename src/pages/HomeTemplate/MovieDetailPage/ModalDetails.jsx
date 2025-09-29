import { Dialog, Transition, DialogPanel } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";
export default function ModalDetails(props) {
  const { movie } = props;

  const { isOpenPopup } = useSelector((state) => state.homeSlice);
  const dispatch = useDispatch();
  return (
    <Transition appear show={isOpenPopup} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(setOpenPopup(true))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {movie?.tenPhim}
                </Dialog.Title>
                <div className="mt-2">
                  <iframe
                    width="100%"
                    height="400"
                    src={movie?.trailer.replace("watch?v=", "embed/")}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <p className="text-sm mt-2 leading-relaxed line-clamp-4">
                  {movie?.moTa}
                </p>

                <div className="mt-4">
                  <button
                    onClick={() => dispatch(setOpenPopup(false))}
                    type="button"
                    className="bg-red-700 hover:bg-red-400 text-white font-semibold px-4 py-2 rounded"
                  >
                    Đóng
                  </button>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-4 py-2 rounded ml-2.5">
                    Đặt vé
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
