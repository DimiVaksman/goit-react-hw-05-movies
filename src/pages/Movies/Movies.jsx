import { Poster } from 'components/Poster/Poster';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovies } from 'servieces/MovieAPI';

const API_KEY = '7510784cb92b403b6cb85c091d4aabc9';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [page, setPage] = useState(1);
  //   const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
  //   const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const posterUrl = 'https://image.tmdb.org/t/p/original/${movie.poster_path}';

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    if (movies === []) {
      return;
    }
    if (page === 1) {
      setMovies([]);
    }

    if (error) {
      setError(null);
    }
    setStatus(Status.PENDING);

    const fetchMovie = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchMovies(query);
        setMovies(results);
        setStatus(Status.RESOLVED);
        if (results.length === 0) {
          alert('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        alert(error.message);
        setMovies([]);
        setError(error);
        setStatus(Status.REJECTED);
      }
    };

    fetchMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <h2>Movies</h2>
      <SearchMovies onSubmit={handleSubmit} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <p> {movie.title}</p>
              <Poster movie={movie} />
              {/* <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}` } width="320" /> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
