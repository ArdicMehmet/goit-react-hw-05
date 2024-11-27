import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <div>
      <header>
        <Navigation />
      </header>
      Movie id : {movieId}
    </div>
  );
};

export default MovieDetailsPage;
