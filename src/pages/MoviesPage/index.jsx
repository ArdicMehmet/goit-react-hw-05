import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MoviesPage = () => {
  const [backLink, setBackLink] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setBackLink(location.state ? location.state : "/");
  }, []);
  return (
    <>
      <NavLink to={backLink}> Geri Dön </NavLink>
    </>
  );
};

export default MoviesPage;
