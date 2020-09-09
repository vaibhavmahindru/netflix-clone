import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, largeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <React.Fragment>
      <div className="row">
        <h2>{title}</h2>
        <div className="row-posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`${base_url}${
                largeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row-poster ${largeRow && "row-posterLarge"}`}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Row;
