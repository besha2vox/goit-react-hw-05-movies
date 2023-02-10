import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList';
import Container from 'components/Container';
import api from 'API';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await api.getTrendingMovies();
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

        setMovies(newMovieList);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  return (
    <main>
      <Container>
        <MoviesList movies={movies} />
      </Container>
    </main>
  );
};

export default Home;
