export default function FavMovie({ favMovies, addToFavories, removeFavories }) {
  return (
    <div className="moviesList">
      {favMovies.map((movie) => {
        return (
          <div className="movieItem">
            <div className="imgWrapper">
              <img src={movie.Poster} alt="poster"></img>
            </div>
            <div className="movieFeatMain">
              <h5>{movie.Title}</h5>

              <button
                className="removed"
                onClick={() => removeFavories(movie.imdbID)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
