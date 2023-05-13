export const Poster = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';
  return <img src={posterUrl} alt={movie.title} />;
};
