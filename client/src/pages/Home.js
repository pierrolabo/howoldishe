import 'materialize-css/dist/css/materialize.min.css';
import { Row, Container } from 'react-materialize';
import { MovieListProvider } from '../hooks/MovieList';

import Search from '../component/Search/Search';
import MoviesPreview from '../component/Container/MoviesPreview';

import './Home.scss';

const Home = () => {
  return (
    <>
      <MovieListProvider>
        <Container>
          <Row>
            <Search />
          </Row>
          <Row>
            <MoviesPreview />
          </Row>
        </Container>
      </MovieListProvider>
    </>
  );
};
export default Home;
