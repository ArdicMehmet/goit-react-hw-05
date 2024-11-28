import React, { useEffect, useState } from "react";
import "./movieList.module.css";
import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <ul>
      {movies.map((movie, index) => (
        <li className="movieItem" key={index}>
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
