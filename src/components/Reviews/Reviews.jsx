import { Cast } from 'components/Cast/Cast';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servieces/MovieAPI';

export const Reviews = () => {
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
      <h1>MOVIE REVIEWS</h1>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>

              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any information about the reviews yet.</p>
      )}
    </div>
  );
};
