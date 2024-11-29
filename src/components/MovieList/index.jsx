import React, { useEffect } from "react";
import styles from "./movieList.module.css";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <ul>
      {movies.map((movie, index) => (
        <li className={styles.movieItem} key={index}>
          <NavLink
            to={`/movies/${movie.id}`}
            state={{
              from: location.pathname,
              query: searchParams.get("query") || "",
            }}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
