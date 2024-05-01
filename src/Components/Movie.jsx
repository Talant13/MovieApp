import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const Movie = ({ movies, addToFavories }) => {
  return (
    <div className="moviesList">
      {movies.map((movie) => {
        return (
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#1e1e1e",
              color: "white",
            }}>
            <img alt="Poster" src={movie.Poster} />
            <CardBody>
              <CardTitle tag="h5">{movie.Title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardText>
              <Button onClick={() => addToFavories(movie.imdbID)}>
                Add To Favorites
              </Button>
            </CardBody>
          </Card>

          // <div className="movieItem">
          //   <div className="imgWrapper">
          //     <img src={movie.Poster} alt="poster"></img>
          //   </div>
          //   <div className="movieFeatMain">
          //     <h3>{movie.Title}</h3>
          //     <button onClick={() => addToFavories(movie.imdbID)}>
          //       Add To Favorites
          //     </button>
          //   </div>
          // </div>
        );
      })}
    </div>
  );
};

export default Movie;
