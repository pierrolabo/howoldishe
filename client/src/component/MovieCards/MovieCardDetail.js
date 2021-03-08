import './MovieCardDetail.scss';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Col, CardTitle, Container } from 'react-materialize';
import { IMG_URL, IMG_SIZE_POSTER } from '../../constants/Constants';

const MovieCardDetail = ({ title, backdrop_path, overview, release_data }) => {
  const img = `${IMG_URL}/${IMG_SIZE_POSTER}${backdrop_path}`;
  return (
    <Container>
      <Col style={{ marginTop: '50px' }} className="moviedetail">
        <Card
          className="moviedetail__card"
          header={<CardTitle image={img}></CardTitle>}
        >
          <span className="moviedetail__card--title">{title}</span>
          <p className="moviedetail__card--overview">{overview}</p>
        </Card>
      </Col>
    </Container>
  );
};

export default MovieCardDetail;
