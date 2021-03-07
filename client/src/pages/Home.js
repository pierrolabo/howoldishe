import 'materialize-css/dist/css/materialize.min.css';
import { Row } from 'react-materialize';
import { MovieListProvider } from '../hooks/MovieList';

import Search from '../component/Search/Search';
import MoviesPreview from '../component/Container/MoviesPreview';

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <Row>
        <a href="#home">
          <h1 className="home--title center-align">How old is he ?</h1>
        </a>
      </Row>
      <Row>
        <h4 className="home--subtitle center-align">
          Search how old he was in the movie !!
        </h4>
      </Row>
      <MovieListProvider>
        <Row>
          <Search />
        </Row>
        <MoviesPreview />
      </MovieListProvider>
    </section>
  );
};
export default Home;
