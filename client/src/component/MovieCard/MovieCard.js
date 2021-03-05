import { useHistory } from 'react-router-dom';
//  BUG FIX "M is not defined"
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Col, Icon, CardTitle } from 'react-materialize';
import { IMG_URL, IMG_SIZE } from '../../constants/Constants';
import './MovieCard.scss';

const MovieCard = ({ id, title, overview, backdrop_path }) => {
  const history = useHistory();
  const handleOnClick = () => history.push(`/movie/${id}`);
  const img = `${IMG_URL}/${IMG_SIZE}${backdrop_path}`;
  if (!backdrop_path || !overview) return null;
  return (
    <Col key={id} xl={2} m={6} s={12} className="moviecard">
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

export default MovieCard;
