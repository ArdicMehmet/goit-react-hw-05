import React, { useEffect, useMemo, useState } from "react";
import { baseImageURL, getCreditsById } from "../../api/movieService";
import { useLocation } from "react-router-dom";
import styles from "./movieCast.module.css"; // CSS modülünü import ediyoruz

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const showCast = useMemo(() => (cast.length > 0 ? true : false), [cast]);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const data = await getCreditsById(location.state);
      setCast(data.cast ? data.cast : []);
      setIsLoading(false);
    })();
  }, [location.state]);

  return (
    <div className={styles.castContainer}>
      {!isLoading ? (
        <div>
          {showCast ? (
            <ul className={styles.castList}>
              {cast.map((actor, index) => (
                <li key={index} className={styles.card}>
                  {actor.profile_path && (
                    <img
                      className={styles.actorImage}
                      src={baseImageURL + actor.profile_path}
                      alt={actor.name}
                    />
                  )}
                  <span className={styles.actorName}>{actor.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noReviews}>
              We don't have any reviews for this movie.
            </p>
          )}
        </div>
      ) : (
        <p>Cast loading...</p>
      )}
    </div>
  );
};

export default MovieCast;
