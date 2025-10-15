import api from "./api";

export const addMovies = async (dataMovie) => {
  try {
    const response = await api.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      dataMovie,
    );
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${id}`);

    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailsMovie = async (id) => {
  try {
    const response = await api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const updateMovies = async (item) => {
  try {
    const response = await api.post("/QuanLyPhim/CapNhatPhimUpload", item);
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDataUser = async () => {
  try {
    const response = await api.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
    );
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(
      `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
    );
    console.log(response);
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getmovieTheater = async () => {
  try {
    const response = await api.get(`/QuanLyRap/LayThongTinHeThongRap`);
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
