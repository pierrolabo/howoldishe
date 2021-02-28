import 'materialize-css/dist/css/materialize.min.css'

import { Card, Row, Col, Dropdown, Button } from 'react-materialize';
import Search from '../component/Search/Search'

import './Home.scss'

const Home = () => {
    return (
        <section className="home">
            <Row>
                <a href="#home" ><h1 className="home--title center-align">How old is he ?</h1></a>
            </Row>
            <Row>
                <h4 className="home--subtitle center-align">
                    Search how old he was in the movie !!
                </h4>
            </Row>
            <Row>
                <Search/>
            </Row>
            
        </section>
    )
}

export default Home;