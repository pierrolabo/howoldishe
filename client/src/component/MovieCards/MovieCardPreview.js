import { useHistory } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { Container, Col, CardTitle } from 'react-materialize';
import { IMG_URL, IMG_SIZE } from '../../constants/Constants';

import './MovieCardPreview.scss';
const MovieCardPreview = ({
  id,
  title,
  overview,
  backdrop_path,
  poster_path,
}) => {
  const history = useHistory();
  const handleOnClick = () => history.push(`/movie/${id}`);
  const img = `${IMG_URL}/${IMG_SIZE}${poster_path}`;
  return (
    <Col s={6} m={3} l={3} xl={3} className="moviecardpreview">
      <img alt={title} onClick={handleOnClick} src={img} />
    </Col>
  );
};

export default MovieCardPreview;
