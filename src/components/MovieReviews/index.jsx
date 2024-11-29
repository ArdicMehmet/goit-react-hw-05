import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getReviewsById } from "../../api/movieService";
import styles from "./movieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const showReviews = useMemo(
    () => (reviews.length > 0 ? true : false),
    [reviews]
  );
  useEffect(() => {
    (async () => {
      const response = await getReviewsById(params.movieId);
      response ? setReviews(response.results) : "";
      setIsLoading(false);
    })();
  }, []);
  return (
    <div className={styles.reviewsContainer}>
      {!isLoading && (
        <div>
          {showReviews ? (
            reviews.map((review, index) => (
              <div key={index} className={styles.review}>
                <h4 className={styles.author}> {review.author} </h4>
                <p className={styles.content}> {review.content} </p>
              </div>
            ))
          ) : (
            <p className={styles.noReviews}>
              We don't have any reviews for this movie.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieReviews;
