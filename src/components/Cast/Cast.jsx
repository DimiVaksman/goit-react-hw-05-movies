import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'servieces/MovieAPI';
import { List , Poster, TextContainer,Actor, Name} from "./Cast.styled"

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { cast } = await fetchCast(movieId);
        setCast(cast);
      } catch (error) {}
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>

      {cast.length ? (
        <List>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <Poster
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <Poster
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}
              <TextContainer>
              <Actor>Actor</Actor> : <Name>{actor.name}</Name> <br />
                <Actor>Character</Actor> : <Name>{actor.character}</Name>
              </TextContainer>
            </li>
          ))}
        </List>
      ) : (
        <p>We don't have any information about the cast yet.</p>
      )}
    </div>
  );
};

export default Cast;