import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./moviesPage.module.css";
import { getSearchByText } from "../../api/movieService";
import MovieList from "../../components/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchParams] = useSearchParams();
  const showMovies = useMemo(
    () => (movies.length > 0 ? true : false),
    [movies]
  );

  const navigate = useNavigate();
  useEffect(() => {
    const searchQuery = searchParams.get("query");
    if (searchQuery) {
      setSearchText(searchQuery);
      fetchMovies(searchQuery);
    }
  }, []);

  const fetchMovies = async (query) => {
    try {
      const response = await getSearchByText(query);
      response ? setMovies(response.results) : setMovies([]);
    } catch (e) {
      setMovies([]);
    }
  };

  const handleClick = () => {
    if (searchText) {
      navigate(`?query=${encodeURIComponent(searchText)}`);
      fetchMovies(searchText);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={(_) => navigate(-1)} className={styles.backButton}>
        Geri Dön
      </button>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search movies..."
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
        <button onClick={handleClick} className={styles.searchButton}>
          🔍
        </button>
      </div>
      {showMovies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
