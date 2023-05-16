import MovieCard from 'components/MovieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'servieces/MovieAPI';
import LogoBack from '../Movies/backward.svg';
import { StyledLink, Back,BackBtn,BackGround,BtnBackStyled } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieCard, setMovieCard] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const results = await fetchMovieDetails(movieId);
        setMovieCard(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [movieId]);

  return (
<BackGround>
<BtnBackStyled>
<StyledLink to={location?.state?.from ?? '/'}>
    <BackBtn><Back src={LogoBack} alt="logo" width="60px" />{' '}</BackBtn>
   </StyledLink>
</BtnBackStyled>
      <MovieCard cards={movieCard} />
</BackGround>
  );
};

export default MovieDetails;
