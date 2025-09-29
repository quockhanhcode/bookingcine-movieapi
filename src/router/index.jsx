import { Route } from "react-router-dom";
import HomeTemplate from "./../pages/HomeTemplate";
import HomePage from "./../pages/HomeTemplate/HomePage";
import MovieDetailPage from "./../pages/HomeTemplate/MovieDetailPage";
import BookTicketPage from "./../pages/HomeTemplate/BookTicketPage";
import ListMoviePage from "../pages/HomeTemplate/ListMoviePage";
import Login from "./../pages/HomeTemplate/Login";
import Register from "./../pages/HomeTemplate/Register";

import AdminTemplate from "./../pages/AdminTemplate";
import MovieManagement from "./../pages/AdminTemplate/MovieManagement";
import AddMovies from "./../pages/AdminTemplate/AddMovies";
import UserManagement from "./../pages/AdminTemplate/UserManagement";
import AddUser from "./../pages/AdminTemplate/AddUser";
import AuthPage from "./../pages/AdminTemplate/AuthPage";
import Dashboard from "../pages/AdminTemplate/Dashboard";
import CinemaManagement from "../pages/AdminTemplate/CinemaManagement";
import TicketManagement from "../pages/AdminTemplate/TicketManagement";
import ShowtimeManagement from "../pages/AdminTemplate/ShowtimeManagement";

const router = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      { path: "", element: HomePage },
      { path: "list-movie", element: ListMoviePage },
      { path: "movie-detail/:movieId", element: MovieDetailPage },
      { path: "ticket-detail/:maLichChieu", element: BookTicketPage },
      { path: "login", element: Login },
      { path: "register", element: Register },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    nested: [
      { path: "dashboard", element: Dashboard },
      { path: "movie-management", element: MovieManagement },
      { path: "add-movie", element: AddMovies },
      { path: "user-management", element: UserManagement },
      { path: "add-user", element: AddUser },
      { path: "cinema-management", element: CinemaManagement },
      { path: "ticket-management", element: TicketManagement },
      { path: "showtime-management", element: ShowtimeManagement },
    ],
  },
  { path: "auth", element: AuthPage },
];

export const renderRouter = () => {
  return router.map((route, index) => {
    if (route.nested) {
      return (
        <Route key={index} path={route.path} element={<route.element />}>
          {route.nested.map((r, i) => {
            return <Route key={i} path={r.path} element={<r.element />} />;
          })}
        </Route>
      );
    } else {
      return (
        <Route key={index} path={route.path} element={<route.element />} />
      );
    }
  });
};
