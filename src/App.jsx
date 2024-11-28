import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Loader from "./components/Loader";
import MovieCast from "./components/MovieCast";
import MovieReviews from "./components/MovieReviews";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFountPage"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader text="Yükleniyor..." />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
