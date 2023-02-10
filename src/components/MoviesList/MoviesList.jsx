import MoviesListItem from './MoviesListItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, votes, title, date, poster }) => (
        <MoviesListItem
          movieId={id}
          key={id}
          votes={votes}
          title={title}
          date={date}
          poster={poster}
        />
      ))}
    </List>
  );
};

export default MoviesList;
