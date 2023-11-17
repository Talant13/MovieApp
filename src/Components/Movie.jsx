import React from "react";

const Movie = ({ movies, addToFavories }) => {
  return (
    <div className="moviesList">
      {movies.map((movie) => {
        return (
          <div className="movieItem">
            <div className="imgWrapper">
              <img src={movie.Poster} alt="poster"></img>
            </div>
            <div className="movieFeatMain">
              <h3>{movie.Title}</h3>
              <button onClick={() => addToFavories(movie.imdbID)}>
                Add To Favorites
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
