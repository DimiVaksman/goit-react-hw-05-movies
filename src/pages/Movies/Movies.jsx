import Poster from 'components/Poster/Poster';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovies } from 'servieces/MovieAPI';
import {
  MoviesList,
  Title,
  Search,
  Back,
  List,
  MovieItem,
  StyledLink,
  TitleMovies,
  BackBtn,BtnBackStyled
} from './Movies.styled';
import LogoBack from '../Movies/backward.svg';



const Movies = () => {
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    if (movies === []) {
      return;
    }

    if (error) {
      setError(null);
    }

    const fetchMovie = async () => {
      try {
        setError(false);
        const { results } = await fetchMovies(query);
        setMovies(results);
        if (results.length === 0) {
          alert('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        alert(error.message);
        setMovies([]);

      }
    };

    fetchMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <MoviesList>
      <BtnBackStyled>
        <Link to="/">
          <BackBtn>
            <Back src={LogoBack} alt="back link" width="60" />
          </BackBtn>
        </Link>
      </BtnBackStyled>
      <Title>go to search movies</Title>

      <Search>
        <SearchMovies onSubmit={handleSubmit} />
      </Search>
      <List>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <Poster movie={movie} />
              <TitleMovies> {movie.title}</TitleMovies>
            </StyledLink>
          </MovieItem>
        ))}
      </List>
    </MoviesList>
  );
};

export default Movies;
