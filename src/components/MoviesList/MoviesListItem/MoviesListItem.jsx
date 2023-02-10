import { Item } from './MoviesListItem.styled';

const MoviesListItem = ({ movieId, votes, title, date, poster }) => {
  return (
    <Item to={`/movies/${movieId}`}>
      <img src={poster} alt={title} />
      <div>
        <p>{title}</p>
      </div>
    </Item>
  );
};

export default MoviesListItem;
