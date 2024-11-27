import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MoviesPage = () => {
  const location = useLocation();

  return (
    <>
      <NavLink to={location.state}> Geri Dön </NavLink>
    </>
  );
};

export default MoviesPage;
