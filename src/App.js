import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Movie from "./Components/Movie";
import InputC from "./Components/InputC";
import FavMovie from "./Components/FavMovie";

function App() {
  const [movies, setMovies] = useState([]);
  // const [favMovies, setFavMovies] = useState([]);
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=c0790adf&s=spider`;

    fetchMovies(url);
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    let tempArr = [];
    let lcStore = localStorage.getItem("moviesList");
    let lc = JSON.parse(lcStore);
    for (let i in lc) {
      const url = `https://www.omdbapi.com/?apikey=c0790adf&i=${lc[i]}`;
      const res = await fetch(url);
      const data = await res.json();
      tempArr.push(data);
    }
    setArr(tempArr);
  };

  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.Search);
  };

  const addToFavories = (imdbID) => {
    let existing = localStorage.getItem("moviesList");
    existing = existing ? JSON.parse(existing) : [];
    for (let i in existing) {
      if (existing[i] === imdbID) {
        alert("Movie is already added");
        return;
      } else {
        continue;
      }
    }
    existing.push(imdbID);
    localStorage.setItem("moviesList", JSON.stringify(existing));

    fetchFavorites();
  };

  const removeFavories = (imdbID) => {
    let existing = localStorage.getItem("moviesList");
    existing = JSON.parse(existing);
    let newArr = existing.filter((item) => item !== imdbID);
    localStorage.setItem("moviesList", JSON.stringify(newArr));
    fetchFavorites();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    fetchMovies(`https://www.omdbapi.com/?apikey=c0790adf&s=${inputValue}`);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 style={{ color: "red", fontSize: "50px", fontWeight: "bold" }}>
          MOVIE APP
        </h1>
        <p>Made with LocalStorage</p>
        <Button
          color="danger"
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            width: "100px",
            height: "50px",
          }}>
          Sign IN
        </Button>
      </header>

      <InputC
        handleChange={handleChange}
        inputValue={inputValue}
        handleSearch={handleSearch}
      />

      <div className="moviesWrapper">
        {!movies > 0 ? null : (
          <Movie addToFavories={addToFavories} movies={movies} />
        )}
      </div>
      <div className="moviesWrapper">
        <h1>Favorites</h1>
        {!arr.length > 0 ? (
          <h3>Add your favorite movies</h3>
        ) : (
          <FavMovie
            addToFavories={addToFavories}
            removeFavories={removeFavories}
            favMovies={arr}
          />
        )}
      </div>
    </div>
  );
}

export default App;
