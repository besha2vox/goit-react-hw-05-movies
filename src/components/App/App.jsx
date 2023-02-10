import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout';

const App = () => {
  const Home = lazy(() => import('pages/Home'));
  const MovieDetails = lazy(() => import('pages/MovieDetails'));
  const Movies = lazy(() => import('pages/Movies'));
  const Cast = lazy(() => import('components/Cast'));
  const Reviews = lazy(() => import('components/Reviews'));
  const Message = lazy(() => import('components/Message'));

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Message text="Page not found" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
