import './MovieCardDetail.scss';
//  BUG FIX "M is not defined"
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Col, Icon, CardTitle } from 'react-materialize';
import { IMG_URL, IMG_SIZE_POSTER } from '../../constants/Constants';

const MovieCardDetail = ({ title, backdrop_path, overview, release_data }) => {
  const img = `${IMG_URL}/${IMG_SIZE_POSTER}${backdrop_path}`;
  return (
    <Col style={{ marginTop: '50px' }} className="moviedetail">
      <Card
        className="moviedetail__card small"
        header={
          <CardTitle image={img}>
            <span>{title}</span>
          </CardTitle>
        }
      >
        <p className="moviedetail__card--overview">{overview}</p>
      </Card>
    </Col>
  );
};

export default MovieCardDetail;
