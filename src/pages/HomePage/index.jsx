import React, { useState, useEffect, useMemo } from "react";
import { getTrendingMovies } from "../../api/movieService";
import Loader from "../../components/Loader";
import { NavLink, useLocation } from "react-router-dom";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const showTrending = useMemo(
    () => (trendingMovies.length > 0 ? true : false),
    [trendingMovies]
  );

  useEffect(() => {
    (async () => {
      const data = await getTrendingMovies();
      setTrendingMovies(data);
      setIsLoading(false);
    })();
  }, []);
  return (
    <>
      <NavLink to={location.state}>Geri Dön</NavLink>
      {isLoading && <Loader text="Filmler yükleniyor..." />}
      {showTrending && JSON.stringify(trendingMovies)}
    </>
  );
};

export default HomePage;
