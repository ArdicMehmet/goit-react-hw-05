import React, { useEffect } from "react";
import styles from "./movieList.module.css";
import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie, index) => (
        <li className={styles.movieItem} key={index}>
          <NavLink
            to={`/movies/${movie.id}`}
            state={`${location.pathname}${
              location.search ? location.search : ""
            }`}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
