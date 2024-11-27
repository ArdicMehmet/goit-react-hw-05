import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./navigation.module.css";
/* ( / ve /movies e yönlendirme olucak burda ) */

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};
const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
