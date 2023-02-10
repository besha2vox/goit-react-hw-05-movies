import { Item, ItemLink } from './MoviesListItem.styled';
import PropType from 'prop-types';
import { useLocation } from 'react-router-dom';
const MoviesListItem = ({ movieId, title, poster }) => {
  const location = useLocation();

  return (
    <Item>
      <ItemLink to={`/movies/${movieId}`} state={{ from: location }}>
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
