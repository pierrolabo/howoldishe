import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../constants/Constants';
import { Row, Preloader } from 'react-materialize';
import MovieCardDetail from '../component/MovieCards/MovieCardDetail';
import ActorCard from '../component/ActorCard/ActorCard';
import './Movie.scss';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    try {
      axios.get(`${API_URL}/movie/${id}`).then((res) => {
        setMovie(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <Row>
        {isLoading ? (
          <Preloader
            active
            color="blue"
            flashing={false}
            size="big"
            className="movie--loader"
          />
        ) : null}
        {movie && <MovieCardDetail {...{ ...movie.details, ...movie.cast }} />}
      </Row>
      <Row className="moviesdetails__container">
        {movie &&
          movie.cast
            //  Remove actor without profile pic or birthday
            .filter((actor) => actor.profile_path && actor.birthday)
            .map((actor) => (
              <ActorCard
                release={movie.details.release_date}
                {...{ ...actor }}
              />
            ))}
      </Row>
    </>
  );
};

export default Movie;
