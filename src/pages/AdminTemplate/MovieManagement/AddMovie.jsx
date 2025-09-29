import { Film, X } from "lucide-react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";
import {
  addMovies,
  getDetailsMovie,
  updateMovies,
} from "../../../service/admin.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { useEffect } from "react";

const schema = z.object({
  tenPhim: z.string().nonempty("Vui lòng nhập thông tin"),
  trailer: z
    .string()
    .nonempty("Vui lòng nhập thông tin")
    .regex(
      /[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&=]*)/gi,
      "Vui lòng nhập đúng định dạng"
    ),
  moTa: z
    .string()
    .nonempty("Vui lòng nhập thông tin")
    .max(500, "Nội dung vượt quá kí tự"),
  ngayKhoiChieu: z.string().nonempty("Không được bỏ trống"),
  trangThai: z.string().optional(),
  maNhom: z.string().optional("GP04"),
  danhGia: z.string().regex(/^(10|[1-9])$/, "Nhập đúng định dạng"),
  // danhGia: z
  //   .number({
  //     required_error: "Vui lòng nhập điểm",
  //     invalid_type_error: "Phải là số",
  //   })
  //   .min(0, "Điểm phải >= 0")
  //   .max(10, "Điểm phải <= 10"),

  hinhAnh: z.any(),
});

export default function AddMovie() {
  const { statusBtn } = useSelector((state) => state.authSlice);
  const { movieID } = useSelector((state) => state.adminSlice);

  const queryClient = useQueryClient();

  const { isOpenPopup } = useSelector((state) => state.homeSlice);
  const dispatch = useDispatch();
  const { register, setValue, watch, handleSubmit, reset, formState } = useForm(
    {
      defaultValues: {
        maPhim: "",
        tenPhim: "",
        trailer: "",
        moTa: "",
        maNhom: "GP04",
        ngayKhoiChieu: null,
        trangThai: false,
        hot: false,
        danhGia: 0,
        hinhAnh: null,
      },
      resolver: zodResolver(schema),
    }
  );

  const errors = formState.errors;

  const hinhAnh = watch("hinhAnh");
  const isChecked = watch("hot");

  const previewImage = (file) => {
    if (!file) return "";
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    if (typeof file === "string") {
      return file;
    }
    return "";
  };

  const { mutate: addItemMovies } = useMutation({
    mutationFn: addMovies,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      dispatch(setOpenPopup(false));
      Swal.fire({
        title: "Đã thêm dữ liệu",
        icon: "success",
        draggable: true,
      });
    },
    onError: (error) => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error: ${error?.message || "Something went wrong"}`,
      });
    },
  });

  const { data: dataDetail } = useQuery({
    queryKey: ["getDetailMovie", movieID],
    queryFn: () => getDetailsMovie(movieID),
    enabled: !!movieID,
  });

  const { mutate: editMovie } = useMutation({
    mutationFn: updateMovies,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      Swal.fire({
        title: "Cập nhật thành công",
        icon: "success",
        draggable: true,
      });
      dispatch(setOpenPopup(false));
    },
    onError: (err) => {
      console.error("Error creating post:", err);
    },
  });

  const onSubmit = (values) => {
    const { trangThai, ...rest } = values;
    const newValues = {
      ...rest,
      sapChieu: trangThai === "false",
      dangChieu: trangThai === "true",
      hot: isChecked,
    };

    const formData = new FormData();
    formData.append("tenPhim", newValues.tenPhim);
    formData.append("trailer", newValues.trailer);
    formData.append("moTa", newValues.moTa);
    formData.append("danhGia", newValues.danhGia);
    formData.append("sapChieu", newValues.sapChieu);
    formData.append("dangChieu", newValues.dangChieu);
    formData.append(
      "ngayKhoiChieu",
      format(newValues.ngayKhoiChieu, "dd/MM/yyyy")
    );
    formData.append("maNhom", newValues.maNhom);
    formData.append("hot", newValues.hot);
    formData.append("hinhAnh", newValues.hinhAnh);
    if (statusBtn) {
      addItemMovies(formData);
      reset();
    } else {
      formData.append("maPhim", dataDetail.maPhim);
      editMovie(formData);
      reset();
    }
  };

  // update
  const movieToForm = (dataDetail) => ({
    maPhim: dataDetail.maPhim || "",
    maNhom: dataDetail.maNhom || "",
    tenPhim: dataDetail.tenPhim || "",
    trailer: dataDetail.trailer || "",
    hinhAnh: dataDetail.hinhAnh || "",
    moTa: dataDetail.moTa || "",
    ngayKhoiChieu: dataDetail.ngayKhoiChieu
      ? dataDetail.ngayKhoiChieu.split("T")[0]
      : "",
    danhGia: dataDetail.danhGia || "",
    hot: dataDetail.hot,
    trangThai: dataDetail.dangChieu ? "true" : "false",
  });

  useEffect(() => {
    if (dataDetail) {
      reset(movieToForm(dataDetail));
    }
  }, [dataDetail, reset]);

  return (
    <div>
      <Dialog
        open={isOpenPopup}
        as="div"
        className="focus:outline-none"
        onClose={() => dispatch(setOpenPopup(false))}
      >
        <div className="fixed z-[999] inset-0 flex w-screen items-center justify-center p-4 bg-[#0009] overflow-scroll">
          <div className="flex w-full items-center justify-center p-4">
            <DialogPanel
              transition
              className=" w-6xl rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="relative flex items-center p-6 bg-pink-50 rounded-t-xl">
                <div className="w-13 h-13 rounded-lg bg-[var(--mainColor)] flex items-center justify-center text-white">
                  <Film className="w-8 h-8 duration-300 transition-all" />
                </div>
                <div className="block ml-4">
                  <p className="text-2xl font-bold text-gray-800">
                    Thêm phim mới
                  </p>
                  <p className="text-base text-gray-600">
                    Điền thông tin phim để thêm vào hệ thống
                  </p>
                </div>

                <div className="absolute inset-y-0 right-4 h-fit my-auto cursor-pointer p-2 hover:text-[var(--mainColor)]">
                  <X
                    onClick={() => dispatch(setOpenPopup(false))}
                    className="w-6 h-6"
                  />
                </div>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="Tên Phim"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tên Phim
                      </label>
                      <input
                        {...register("tenPhim")}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tên Phim..."
                      />
                      {errors.tenPhim && (
                        <span className="text-red-500 font-bold">
                          {errors.tenPhim.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="Trailer"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Trailer
                      </label>
                      <input
                        {...register("trailer")}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                      />
                      {errors.trailer && (
                        <span className="text-red-500 font-bold">
                          {errors.trailer.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Đánh giá
                      </label>
                      <input
                        {...register("danhGia")}
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Đánh giá"
                      />
                      {errors?.danhGia && (
                        <span className="text-red-500 font-bold">
                          {errors?.danhGia?.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mô tả
                      </label>
                      <textarea
                        {...register("moTa")}
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                        defaultValue={""}
                      />
                      {errors.moTa && (
                        <span className="text-red-500 font-bold">
                          {errors.moTa.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Ngày Khởi Chiếu
                      </label>
                      <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div>
                        <input
                          {...register("ngayKhoiChieu")}
                          id="default-datepicker"
                          type="date"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Select date"
                        />
                        {errors.ngayKhoiChieu && (
                          <span className="text-red-500 font-bold">
                            {errors.ngayKhoiChieu.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-3.5">
                      <div>
                        <input type="checkbox" {...register("hot")} />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Hot
                        </label>
                      </div>
                      <label className="inline-flex flex-col cursor-pointer">
                        <span className="text-sm mb-3.5 font-medium text-gray-900 dark:text-gray-300">
                          Tình Trạng
                        </span>
                        <div className="space-y-2.5">
                          <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                            <input
                              type="radio"
                              {...register("trangThai")}
                              name="trangThai"
                              value="false"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Sắp Chiếu
                            </label>
                          </div>
                          <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                            <input
                              type="radio"
                              {...register("trangThai")}
                              name="trangThai"
                              value="true"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Đang Chiếu
                            </label>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="mb-2.5">
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                      >
                        Hình Ảnh
                      </label>
                      <input
                        type="file"
                        accept=".png, .jpg, .jpeg, .gif"
                        name="hinhAnh"
                        onChange={(events) => {
                          const hinhAnh = events.target.files[0];
                          setValue("hinhAnh", hinhAnh);
                        }}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      />
                      {errors.hinhAnh && (
                        <span className="text-red-500 font-bold">
                          {errors.hinhAnh.message}
                        </span>
                      )}
                    </div>
                    {hinhAnh && (
                      <div className="relative mt-6 w-[15rem] h-auto max-w-full rounded-lg">
                        <img
                          src={previewImage(hinhAnh)}
                          className="w-full h-full"
                          alt="preview"
                        />
                        <div
                          onClick={() => setValue("hinhAnh", null)}
                          className="absolute top-[-15px] right-[-15px]"
                        >
                          <svg
                            className="w-[30px] h-[30px] text-red-600 dark:text-white cursor-pointer"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  {statusBtn === true ? (
                    <button
                      type="submit"
                      className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Xác Nhận
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Cập Nhật
                    </button>
                  )}
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
