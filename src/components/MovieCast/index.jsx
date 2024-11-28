import React, { useEffect, useMemo, useState } from "react";
import { baseImageURL, getCreditsById } from "../../api/movieService";
import { useLocation } from "react-router-dom";
import styles from "./movieCast.module.css"; // CSS modülünü import ediyoruz

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const showCast = useMemo(() => (cast.length > 0 ? true : false), [cast]);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const data = await getCreditsById(location.state);
      setCast(data.cast ? data.cast : []);
    })();
  }, [location.state]);

  return (
    <div className={styles.castContainer}>
      <ul className={styles.castList}>
        {showCast &&
          cast.map((actor, index) => (
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
    </div>
  );
};

export default MovieCast;
