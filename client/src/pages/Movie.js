import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../constants/Constants';
import { Row, Preloader, Col } from 'react-materialize';
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
    // eslint-disable-next-line
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
      <Row className={`moviesdetails__container`}>
        <Col
          xl={12}
          offset={`${
            movie?.cast.filter((actor) => actor.profile_path && actor.birthday)
              .length < 6
              ? 'xl2'
              : ''
          }`}
        >
          {movie &&
            movie.cast
              //  Remove actor without profile pic or birthday
              .filter((actor) => actor.profile_path && actor.birthday)
              .map((actor) => (
                <ActorCard
                  key={actor.id}
                  release={movie.details.release_date}
                  {...{ ...actor }}
                />
              ))}
        </Col>
      </Row>
    </>
  );
};

export default Movie;
