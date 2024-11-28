import React from "react";
import "./movieList.module.css";
import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie, index) => (
        <li className="movieItem" key={index}>
          <NavLink to={`/movies/${movie.id}`} state={location.pathname}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
