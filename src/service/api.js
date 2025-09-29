import axios from "axios";
const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
  // baseURL: "/api",
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    const accessToken = user ? user.accessToken : null;
    return {
      ...config,
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MyIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc2ODY5NDQwMDAwMCIsIm5iZiI6MTc0MTg4ODgwMCwiZXhwIjoxNzY4ODQ1NjAwfQ.rosAjjMuXSBmnsEQ7BQi1qmo6eVOf1g8zhTZZg6WSx4",
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
