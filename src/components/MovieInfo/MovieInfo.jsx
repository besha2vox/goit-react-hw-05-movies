import {
  Wrapper,
  Title,
  SubTitle,
  Text,
  ContentWrraper,
  GanreWrapper,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { genres, title, overview, poster, votes } = movie;

  return (
    <Wrapper>
      <img width="450" src={poster} alt={title} />
      <ContentWrraper>
        <Title>{title}</Title>
        <div>
          <SubTitle>Overview</SubTitle>
          <Text>{overview}</Text>
        </div>
        <GanreWrapper>
          <SubTitle>
            Genres: <span>{genres}</span>
          </SubTitle>
        </GanreWrapper>
        <SubTitle>
          Rating: <span>{votes.toFixed(1)}</span>
        </SubTitle>
      </ContentWrraper>
    </Wrapper>
  );
};

export default MovieInfo;
