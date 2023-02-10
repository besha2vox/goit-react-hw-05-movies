import { Item, ItemLink } from './MoviesListItem.styled';
import PropType from 'prop-types';

const MoviesListItem = ({ movieId, title, poster }) => {
  return (
    <Item>
      <ItemLink to={`/movies/${movieId}`}>
        <img src={poster} alt={title} />
        <div>
          <p>{title}</p>
        </div>
      </ItemLink>
    </Item>
  );
};

export default MoviesListItem;

MoviesListItem.propType = {
  movieId: PropType.number.isRequired,
  title: PropType.string.isRequired,
  poster: PropType.string.isRequired,
};
