import { ReviewsItem, ReviewsList } from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'API/API';
import Message from 'components/Message';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await api.getSearchMoviesReview(movieId);

      setReviews(
        data.results.map(
          ({ id, author, author_details: { avatar_path }, content }) => ({
            id,
            author,
            content,
            avatar:
              avatar_path && !avatar_path.includes('http')
                ? `https://image.tmdb.org/t/p/original${avatar_path}`
                : 'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg',
          })
        )
      );
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {!!reviews.length ? (
        <ReviewsList>
          {reviews.map(({ id, author, content, avatar }) => (
            <ReviewsItem key={id}>
              <div>
                <img src={avatar} alt={author} />
                <h3>Author: {author}</h3>
              </div>
              <p>
                Review: <span>{content}</span>
              </p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <Message text="There are no reviews" />
      )}
    </>
  );
};

export default Reviews;
