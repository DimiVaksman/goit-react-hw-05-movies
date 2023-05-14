import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'servieces/MovieAPI';

const MovieDetails = () => {

    const { movieId } = useParams();
    const [movieCard, setMovieCard] = useState([]);
    const location = useLocation()

    useEffect(() => {
        const fetchDetails = async () => {
          try {
            const results  = await fetchMovieDetails(movieId);
            setMovieCard(results);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchDetails();
      }, [movieId]);



  return (
    <div>
        <Link to={location?.state?.from ?? '/'}>Back</Link>
        <MovieCard cards={movieCard} />
    </div>
  );
};

export default MovieDetails;
