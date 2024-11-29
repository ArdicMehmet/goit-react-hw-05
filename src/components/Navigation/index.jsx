import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import style from "./navigation.module.css";
/* ( / ve /movies e yönlendirme olucak burda ) */

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};
const Navigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  return (
    <header>
      <nav>
        <NavLink
          to="/"
          state={{
            from: location.pathname,
            query: searchParams.get("query") || "",
          }}
          className={buildLinkClass}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          state={{
            from: location.pathname,
            query: searchParams.get("query") || "",
          }}
          className={buildLinkClass}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
