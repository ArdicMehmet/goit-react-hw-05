import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { baseImageURL, getMoviesById } from "../../api/movieService";
import styles from "./movieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [backLink, setBackLink] = useState("/");
  const initialLocationState = useRef(null);
  const showMovie = useMemo(() => (movie ? true : false), [movie]);
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { movieId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // if (!initialLocationState.current) {
    //   initialLocationState.current = location.state; // Sadece ilk değer
    // }
    !initialLocationState.current
      ? (initialLocationState.current = location.state)
      : "";
    const state = initialLocationState.current;
    if (state?.from == "/movies") {
      const query = location.state.query || "";
      setBackLink(state.from || "/");
      if (query) {
        setBackLink((prev) => prev + `?query=${encodeURIComponent(query)}`);
      }
    } else {
      setBackLink(state?.from || "/");
    }
    (async () => {
      const data = await getMoviesById(movieId);
      setMovie(data);
    })();
  }, []);

  return (
    <div className={styles.movieDetails}>
      <button onClick={(_) => navigate(-1)} className={styles.backButton}>
        Geri Dön
      </button>
      <h1 className={styles.movieTitle}>Movie Details Page</h1>
      {showMovie && (
        <section className={styles.movieContent}>
          <img
            className={styles.moviePoster}
            src={`${baseImageURL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={styles.movieInfo}>
            <h2 className={styles.movieName}>{movie.title}</h2>
            <p className={styles.movieVote}>
              <strong>Vote Average:</strong>{" "}
              {Math.floor(Number(movie.vote_average) * 10)}%
            </p>
            <div className={styles.movieOverview}>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div className={styles.movieGenres}>
              <h3>Genres</h3>
              <ul className={styles.genreList}>
                {movie.genres.map((genre, index) => (
                  <li key={index} className={styles.genreItem}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.additionalInformation}>
              <h3>Additional Information</h3>
              <ul className={styles.infoList}>
                <li>
                  <NavLink
                    to={"cast"}
                    state={movie.id ? movie.id : null}
                    className={styles.infoLink}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"reviews"}
                    state={movie.id ? movie.id : null}
                    className={styles.infoLink}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
