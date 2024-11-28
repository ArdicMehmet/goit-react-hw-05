import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { baseImageURL, getMoviesById } from "../../api/movieService";
import styles from "./movieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const showMovie = useMemo(() => (movie ? true : false), [movie]);
  const location = useLocation();
  const [backLink, setBackLink] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    setBackLink(location.state ? location.state : "/");
  }, []);
  useEffect(() => {
    (async () => {
      const data = await getMoviesById(movieId);
      setMovie(data);
    })();
  }, [movieId]);

  return (
    <div className={styles.movieDetails}>
      <NavLink to={backLink} className={styles.backButton}>
        Geri Dön
      </NavLink>
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
