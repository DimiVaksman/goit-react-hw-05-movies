import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'servieces/MovieAPI';
import { RotatingLines } from 'react-loader-spinner';

import {
  TrendMovieList,
  TitleTrendMovies,
  Loader,
  TrendMovieItem,
  TrendMovieImg,
  StyledLink,
  Title
} from './Home.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [, setIsLoading] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {

    const fetchTrendingMovies = async () => {
      try {

        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendMovies(results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error)
      }
    };

    fetchTrendingMovies();
  }, []);

  if (status === Status.PENDING) {
    return (
      <Loader>
        <RotatingLines
          strokeColor="red"
          strokeWidth="5"
          animationDuration="0.75"
          height="60"
          width="60"
          visible={true}
        />
      </Loader>
    );
  }

  if (status === Status.REJECTED) {
    return <div>ERROR</div>;
  }

  if (status === Status.RESOLVED) {
    return (
      <div>
        <Title>Popular Movies Right Now</Title>
        <TrendMovieList>
          {trendMovies.map(trendMovie => (
            <TrendMovieItem key={trendMovie.id}>
              <StyledLink to={`/movies/${trendMovie.id}`}>
                <TrendMovieImg
                  src={`https://image.tmdb.org/t/p/original/${trendMovie.poster_path}`}
                  width="280"
                  height="360px"
                />
                <TitleTrendMovies> {trendMovie.title}</TitleTrendMovies>
              </StyledLink>
            </TrendMovieItem>
          ))}
        </TrendMovieList>
      </div>
    );
  }
};

export default Home;
