import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import style from "./navigation.module.css";
/* ( / ve /movies e yönlendirme olucak burda ) */

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};
const Navigation = () => {
  const [backLink, setBackLink] = useState(null);
  const location = useLocation();
  useEffect(() => {
    location.pathname ? setBackLink(location.pathname) : setBackLink("/");
  }, [location]);
  return (
    <header>
      <nav>
        <NavLink to="/" state={location.pathname} className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" state={backLink} className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
