import 'materialize-css/dist/css/materialize.min.css';
import { Row } from 'react-materialize';
import { MovieListProvider } from '../hooks/MovieList';

import Search from '../component/Search/Search';
import MoviesPreview from '../component/Container/MoviesPreview';

import './Home.scss';

const Home = () => {
  return (
    <>
      <MovieListProvider>
        <Row>
          <Search />
        </Row>
        <MoviesPreview />
      </MovieListProvider>
    </>
  );
};
export default Home;
