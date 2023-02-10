import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'API/API';
import { List } from 'components/MoviesList/MoviesList.styled';
import styled from 'styled-components';
import { itemStyles } from 'components/MoviesList/MoviesListItem/MoviesListItem.styled';
import Message from 'components/Message';

const CastItem = styled.li`
  ${itemStyles}
`;

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getActors = async () => {
      const { data } = await api.getSearchMoviesCredits(movieId);

      setActors(
        data.cast.map(({ id, character, name, profile_path }) => ({
          id,
          character,
          name,
          profile: profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : 'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg',
        }))
      );
    };

    getActors();
  }, [movieId]);

  console.log(actors);

  return (
    <>
      {!!actors.length ? (
        <List>
          {actors.map(({ id, character, name, profile }) => (
            <CastItem key={id}>
              <img src={profile} alt={name} />
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </CastItem>
          ))}
        </List>
      ) : (
        <Message text="Cast of actors not found" />
      )}
    </>
  );
};

export default Cast;
