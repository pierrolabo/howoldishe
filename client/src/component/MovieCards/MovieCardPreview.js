import { useHistory } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Col, CardTitle } from 'react-materialize';
import { IMG_URL, IMG_SIZE } from '../../constants/Constants';

import './MovieCardPreview.scss';
const MovieCardPreview = ({ id, title, overview, backdrop_path }) => {
  const history = useHistory();
  const handleOnClick = () => history.push(`/movie/${id}`);
  const img = `${IMG_URL}/${IMG_SIZE}${backdrop_path}`;
  return (
    <Col s={12} m={6} l={4} xl={2} className="moviecardpreview">
      <Card
        onClick={handleOnClick}
        header={
          <CardTitle image={img}>
            <span className="moviecard__title">{title}</span>
          </CardTitle>
        }
      >
        <p className="truncate">{overview}</p>
      </Card>
    </Col>
  );
};

export default MovieCardPreview;
