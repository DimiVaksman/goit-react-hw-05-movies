import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieCard = ({ cards }) => {
  const location = useLocation();

  const { genres, poster_path, overview, title, release_date, vote_average } =
    cards;

  const postUrl = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : `https://via.placeholder.com/200x300?text=No+Image`;

  const ranking = vote_average ? vote_average.toFixed(1) : 'Not rated yet';

  return (
    <div>
      <ul>
        <img src={postUrl} alt="" width={480} />
        <h2>{title}</h2>
        <p>{release_date}</p>
        <p>{ranking}/10</p>
        <p>{overview}</p>
        {genres && genres.length > 0 && (
          <div>
            <p>Genres:</p>
            {genres.map(genre => genre.name).join(', ')}
          </div>
        )}
              <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
      </ul>
    </div>
  );
};
