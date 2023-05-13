import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <h2>MovieDetails</h2>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
