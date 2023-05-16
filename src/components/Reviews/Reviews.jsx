
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servieces/MovieAPI';
import { List,Author, Content } from './Reviews.styled';

 const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length ? (
        <List>
          {reviews.map(review => (
            <li key={review.id}>
              <Author>{review.author}</Author>

              <Content>{review.content}</Content>
            </li>
          ))}
        </List>
      ) : (
        <Content>We don't have any information about the reviews yet.</Content>
      )}
    </div>
  );
};

export default Reviews;
