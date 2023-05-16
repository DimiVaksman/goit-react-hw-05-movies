import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieList, Poster, Title, Text, Info, CR , CrItem, StyledLink} from './MovieCard.styled';

const MovieCard = ({ cards }) => {

  const { genres, poster_path, overview, title, release_date, vote_average } =
    cards;

  const postUrl = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : `https://via.placeholder.com/200x300?text=No+Image`;

  const ranking = vote_average ? vote_average.toFixed(1) : 'Not rated yet';

  return (
    <div>
      <MovieList>
        <Poster src={postUrl} alt="" width={380} />
        <div>
          <Title>{title}</Title>
          <p>
            <Text>Release Data:</Text> <Info>{release_date}</Info>{' '}
          </p>
          <p>
            <Text>Ranking</Text> <Info>{ranking}/10</Info>
          </p>
          <Info>{overview}</Info>
          {genres && genres.length > 0 && (
            <div>
              <p>
                <Text>Genres:</Text>
              </p>
              <Info>{genres.map(genre => genre.name).join(', ')}</Info>
            </div>
          )}
        </div>


      </MovieList>
      <CR>
          <CrItem>
            <StyledLink to="cast">cast</StyledLink>
          </CrItem>
          <CrItem>
            <StyledLink to="reviews">reviews</StyledLink>
          </CrItem>
        </CR>
        <Outlet />
    </div>
  );
};

MovieCard.propTypes = {
  cards: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
