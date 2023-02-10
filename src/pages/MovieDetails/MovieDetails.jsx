import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from 'API/API';
import { BackButton } from './MovieDetails.styled';
import MovieInfo from 'components/MovieInfo';
import AdditionalInfo from 'components/AditionalInfo/AdditionalInfo';
import Reviews from 'components/Reviews';
import Cast from 'components/Cast';
import Container from 'components/Container';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const getMovie = async () => {
      const {
        data: { genres, original_title, overview, poster_path, vote_average },
      } = await api.getSearchMoviesByID(movieId);
      const movieInfo = {
        genres: genres.map(({ name }) => name).join(', '),
        title: original_title,
        overview: overview,
        poster: poster_path
          ? `https://image.tmdb.org/t/p/original${poster_path}`
          : 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg',
        votes: vote_average,
      };

      setMovie(movieInfo);
    };

    getMovie();
  }, [movieId]);

  if (!movie) return;

  return (
    <main>
      <Container>
        <BackButton to={backLink}>{'<- Go back'}</BackButton>
        <MovieInfo movie={movie} />
        <AdditionalInfo>
          <Cast />
          <Reviews />
        </AdditionalInfo>
      </Container>
    </main>
  );
};

export default MovieDetails;
