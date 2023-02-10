import { Item } from './MoviesListItem.styled';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { useLocation } from 'react-router-dom';
const MoviesListItem = ({ movieId, title, poster }) => {
  const location = useLocation();

  return (
    <Item>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        <img src={poster} alt={title} />
        <div>
          <p>{title}</p>
        </div>
      </Link>
    </Item>
  );
};

export default MoviesListItem;

MoviesListItem.propType = {
  movieId: PropType.number.isRequired,
  title: PropType.string.isRequired,
  poster: PropType.string.isRequired,
};
