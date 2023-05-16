import { MoviePoster } from './Poster.styled';

const Poster = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';
  return (
    <MoviePoster src={posterUrl} alt={movie.title} width="280" height="360px" />
  );
};

export default Poster;
