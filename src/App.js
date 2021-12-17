import "./styles.css";
import classes from "./App.module.css";
import MovieList from "./components/MovieList";
import { useState } from "react";
import MovieInfo from "./components/MovieInfo";
import axios from "axios";
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeOutValue, setTimeOutValue] = useState();
  const [movieList, setMovieList] = useState([]);
  const [movieInfo, setMovieInfo] = useState();

  const fetchData = async (searchString) => {
    const resp = await fetch(
      `https://www.omdbapi.com/?s=${searchString}&apikey=7a213967`
    );
    const data = await resp.json();
    setMovieList(data.Search);
    console.log(data.Search);
  };
  const inputChangeHandler = (e) => {
    setSearchQuery(e.target.value);
    clearTimeout(timeOutValue);
    const timeOut = setTimeout(() => fetchData(e.target.value), 500);
    setTimeOutValue(timeOut);
  };
  const movieInfoHandler = (data) => {
    setMovieInfo(data);
    console.log(data);
  };
  return (
    <>
      <div className={classes.header}>
        <div className={classes.appname}>Movies App</div>
        <div className={classes.searchInput}>
          <input
            type="text"
            placeholder="search for movie here"
            value={searchQuery}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      {movieInfo && <MovieInfo selectedMovieData={movieInfo} />}
      <div className={classes.movieContainer}>
        {movieList?.length ? (
          movieList.map((movie) => {
            return <MovieList movie={movie} onMovieInfo={movieInfoHandler} />;
          })
        ) : (
          <h1>No movie found</h1>
        )}
      </div>
    </>
  );
}
