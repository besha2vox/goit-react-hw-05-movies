import { useState, useEffect } from 'react';
import api from 'API/API';
import Container from 'components/Container';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import Message from 'components/Message';

const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMovieFetched, setIsMovieFetched] = useState(false);

  useEffect(() => {
    if (!query || query === api.queryToFetch) return;

    const getMovies = async () => {
      setLoading(true);
      api.queryToFetch = query;
      try {
        const response = await api.getMoviesByKeyWord();
        const { results } = response.data;
        const newMovieList = results.map(({ id, title, poster_path }) => {
          return {
            id,
            title,
            poster: poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Zco_AzlB5030ccqs-SkdHxO_PmzfBw5sjXSKCjfaX46A9-YEg-9_vjqAHsvgQTw3kbw&usqp=CAU',
          };
        });

        setIsMovieFetched(true);
        setMovies(newMovieList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
    return () => (api.queryToFetch = null);
  }, [query]);

  const onFormSubmit = q => {
    setQuery(q);
  };

  const isMessegeShow = movies.length < 1 && isMovieFetched;

  return (
    <main>
      <Container>
        <SearchForm onFormSubmit={onFormSubmit} />
        {!!movies.length && <MoviesList movies={movies} />}
        {isMessegeShow && <Message text="Movies not found. Try again." />}
        {!isMovieFetched && (
          <Message text="Enter the name of the movie to search" />
        )}
        {loading && <Loader />}
      </Container>
    </main>
  );
};

export default Movies;
