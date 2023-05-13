import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendMovies } from 'servieces/MovieAPI';

import { TrendMovieList,TitleTrendMovies } from  './Home.styled'

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  };

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {

    if (trendMovies === []) {
        return;
      }
      if (page === 1) {
        setTrendMovies([]);
      }

      if (error) {
        setError(null);
      }
      setStatus(Status.PENDING);

    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendMovies(results)
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error)
        setStatus(Status.REJECTED)
      }
    };

    fetchTrendingMovies();
  }, []);

  if (status === Status.PENDING) {
    return <div>Loading...</div>
  }

  if (status === Status.REJECTED) {
    return <div>ERROR</div>;
  }

  if (status === Status.RESOLVED){
    return (
        <TrendMovieList>
    
    {trendMovies.map(trendMovie => (
              <li key={trendMovie.id}>
                <Link to={`/movies/${trendMovie.id}`}>
                 <TitleTrendMovies> {trendMovie.title}</TitleTrendMovies>
                  <img src={`https://image.tmdb.org/t/p/original/${trendMovie.poster_path}`} width="320" />
                </Link>
              </li>
            ))}
        </TrendMovieList>
      );
  }

};

export default Home;
