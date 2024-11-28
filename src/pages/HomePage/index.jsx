import React, { useState, useEffect, useMemo } from "react";
import "./homePage.module.css";
import { getTrendingMovies } from "../../api/movieService";
import Loader from "../../components/Loader";
import MovieList from "../../components/MovieList";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const showTrending = useMemo(
    () => (trendingMovies.length > 0 ? true : false),
    [trendingMovies]
  );

  useEffect(() => {
    (async () => {
      const data = await getTrendingMovies();
      setTrendingMovies(data.results ?? []);
      setIsLoading(false);
    })();
  }, []);
  return (
    <>
      <main>
        <h1>Trending Movies</h1>
        {isLoading && <Loader text="Filmler yükleniyor..." />}
        {showTrending && <MovieList movies={trendingMovies} />}
      </main>
    </>
  );
};

export default HomePage;
