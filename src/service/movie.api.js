import api from "./api";

export const getListMovieApi = async (maNhom, page, itemPage) => {
  try {
    const response = await api.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${maNhom}&soTrang=${page}&soPhanTuTrenTrang=${itemPage}`
    );
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const getBannerApi = async () => {
  try {
    const response = await api.get("/QuanLyPhim/LayDanhSachBanner");
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetailApi = async (maPhim) => {
  try {
    const response = await api.get(
      `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    );
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const movie_info = async (maPhim) => {
  try {
    const response = await api.get(
      `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};
export const ticket_detail = async (maLichChieu) => {
  try {
    const response = await api.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
    return response.data.content;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const booking_sticket = async (thongTinDatVe) => {
  try {
    const response = await api.post("/QuanLyDatVe/DatVe", thongTinDatVe);
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};
