import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./moviesPage.module.css";
import { getSearchByText } from "../../api/movieService";
import MovieList from "../../components/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const showMovies = useMemo(
    () => (movies.length > 0 ? true : false),
    [movies]
  );
  const [backLink, setBackLink] = useState(null);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setBackLink(location.state ? location.state : "/");
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    if (query) {
      setSearchText(query);
      fetchMovies(query);
    }
  }, [location.search]);

  const fetchMovies = async (query) => {
    const response = await getSearchByText(query);
    response ? setMovies(response.results) : setMovies([]);
  };

  const handleClick = () => {
    if (searchText) {
      navigate(`?query=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div className={styles.container}>
      <NavLink to={backLink} className={styles.backButton}>
        Geri Dön
      </NavLink>
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
