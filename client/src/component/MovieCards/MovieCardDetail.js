import './MovieCardDetail.scss';
//  BUG FIX "M is not defined"
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Col, Icon, CardTitle } from 'react-materialize';
import { IMG_URL, IMG_SIZE_POSTER } from '../../constants/Constants';

const MovieCardDetail = ({ title, backdrop_path, overview, release_data }) => {
  const img = `${IMG_URL}/${IMG_SIZE_POSTER}${backdrop_path}`;
  return (
    <Col style={{ marginTop: '50px' }}>
      <Card
        className="horizontal"
        header={
          <CardTitle image={img}>
            <span>{title}</span>
          </CardTitle>
        }
      >
        <p>{overview}</p>
      </Card>
    </Col>
  );
};

export default MovieCardDetail;
