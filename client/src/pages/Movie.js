import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../constants/Constants';
import { Row } from 'react-materialize';
import MovieCardDetail from '../component/MovieCards/MovieCardDetail';

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
  console.log(movie);
  return (
    <Row>
      {movie && <MovieCardDetail {...{ ...movie.details, ...movie.cast }} />}
    </Row>
  );
};

export default Movie;
