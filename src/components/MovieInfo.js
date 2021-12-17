import { useEffect, useState } from "react";
import classes from "./MovieInfo.module.css";
const MovieInfo = (props) => {
  const selectedMovieData = props.selectedMovieData;
  const [data, setData] = useState({});
  const [show, setShow] = useState(true);
  console.log(selectedMovieData, data);

  const fetchMovie = async () => {
    const resp = await fetch(
      `https://www.omdbapi.com/?i=${selectedMovieData}&apikey=7a213967`
    );
    const dataValue = await resp.json();
    setData(dataValue);
    console.log(dataValue);
  };
  useEffect(() => {
    fetchMovie();
  }, [selectedMovieData]);
  const showMovieHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={classes.show_hide_button}>
        <button onClick={showMovieHandler}>
          {show ? "Hide Details" : "Show Deatils"}
        </button>
      </div>
      {show && (
        <div className={classes.movieDetailsContainer}>
          <div className={classes.moviePoster}>
            <img src={data.Poster} />
          </div>
          <div className={classes.movieDetails}>
            <h3>Actors: {data.Actors}</h3>
            <p>Awards: {data.Awards} </p>
            <p>Rated: {data.Rated}</p>
            <p>Genre: {data.Genre}</p>
            <p>Language: {data.Language}</p>
            <p>Director: {data.Director}</p>
            <p>Production: {data.Production}</p>
            <p>BoxOffice: {data.BoxOffice}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default MovieInfo;

//`https://www.omdbapi.com/?i=${selectedMovieData}&apikey=7a213967`
// Actors: "Anni-Frid Lyngstad"
// Awards: "N/A"
// BoxOffice: "N/A"
// Country: "Sweden"
// DVD: "N/A"
// Director: "N/A"
// Genre: "Short, Music"
// Language: "Swedish"
// Metascore: "N/A"
// Plot: "N/A"
// Poster: "N/A"
// Production: "N/A"
// Rated: "N/A"
