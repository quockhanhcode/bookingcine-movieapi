import MainVisual from "./MainVisual";
import MovieShow from "./MovieShow";
import MovieComing from "./MovieComing";
import ListMovie from "./ListMovie";

import "./home.css";

export default function HomePage() {
  return (
    <>
      <MainVisual />
      <div className="wrapper mx-auto">
        <MovieShow />
        <MovieComing />
        <ListMovie />
      </div>
    </>
  );
}
