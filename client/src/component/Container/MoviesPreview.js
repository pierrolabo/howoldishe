import { useContext } from 'react';
import { MovieListContext } from '../../hooks/MovieList';
import 'materialize-css/dist/css/materialize.min.css';
import MovieCardPreview from '../MovieCards/MovieCardPreview';
import { Row, Preloader } from 'react-materialize';

import './MoviesPreview.scss';
const MoviesPreview = () => {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies, isLoading, setLoading] = useContext(
    MovieListContext
  );
  return (
    <Row className="moviespreview">
      {isLoading ? (
        <Preloader
          active
          color="blue"
          flashing={false}
          size="big"
          className="moviespreview--loader"
        />
      ) : null}
      {movies?.length === 0 ? (
        <h1 className="moviespreview--noresults">No results found</h1>
      ) : null}
      {!isLoading &&
        movies &&
        movies.map((item) => {
          return <MovieCardPreview {...item} key={item.id} />;
        })}
    </Row>
  );
};
export default MoviesPreview;
