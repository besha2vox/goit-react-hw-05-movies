import MoviesListItem from './MoviesListItem';
import { List } from './MoviesList.styled';
import PropType from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster }) => (
        <MoviesListItem movieId={id} key={id} title={title} poster={poster} />
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propType = {
  movies: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      title: PropType.string.isRequired,
      poster: PropType.string.isRequired,
    })
  ),
};
