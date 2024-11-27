import React, { useState, useEffect, useMemo } from "react";
import { getTrendingMovies } from "../../api/movieService";
import Loader from "../../components/Loader";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const showTrending = useMemo(() =>
    trendingMovies.length > 0 ? true : false
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
      {isLoading && <Loader text="Filmler yükleniyor..." />}
      {showTrending && JSON.stringify(trendingMovies)}
    </>
  );
};

export default HomePage;
