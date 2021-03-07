import { Row } from 'react-materialize';
import './Layout.scss';
const Layout = (props) => {
  return (
    <section className="home">
      <Row>
        <a href="/">
          <h1 className="home--title center-align">How old is he ?</h1>
        </a>
      </Row>
      <Row>
        <h4 className="home--subtitle center-align">
          Search how old he was in the movie !!
        </h4>
      </Row>
      {props.children}
    </section>
  );
};

export default Layout;
