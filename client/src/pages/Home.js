import axios from 'axios';
import { useEffect, useState } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import { Row } from 'react-materialize';
import Search from '../component/Search/Search';
import MovieCardPreview from '../component/MovieCards/MovieCardPreview';

import './Home.scss';
const URL = 'http://localhost:2000/api/movies';

const Home = () => {
  const [topMovies, setTopMovies] = useState(['a', 'b']);
  useEffect(() => {
    try {
      axios.get(`${URL}/top`).then((res) => setTopMovies(res.data.results));
    } catch (err) {
      console.log(err);
    }
  }, []);
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
      <Row>
        <Search />
      </Row>
      <Row style={{ padding: '0rem 2rem' }}>
        {topMovies &&
          topMovies.map((item) => {
            return <MovieCardPreview {...item} />;
          })}
        <MovieCardPreview />
      </Row>
    </section>
  );
};

export default Home;
