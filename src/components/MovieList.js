import react from "react";
import classes from "./MovieList.module.css";
const MovieList = (props) => {
  const { Poster, Title, imdbID, Type, Year } = props.movie;
  return (
    <div
      className={classes.movieListContainer}
      onClick={() => props.onMovieInfo(imdbID)}
    >
      <div className={classes.movieImageWrapper}>
        <img className={classes.movieImage} src={Poster} />
      </div>
      <div className={classes.category_container}>
        <div className={classes.movieName}>{Title}</div>
        <div className={classes.category}>
          <div>
            <b>Year: </b> {Year}
          </div>
          <div>
            <b>Type: </b> {Type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
