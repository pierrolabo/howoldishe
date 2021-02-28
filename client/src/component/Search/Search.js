//  BUG FIX "M is not defined"
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import { TextInput, Col } from 'react-materialize';

import './Search.scss';

const Search = () => {
    return (
        <Col xs={8} s={12} m={9} l={9} className="search valign-wrapper">
            <TextInput
                className="search--input"
                label="Search a movie"
                xs={4}
                s={12}
                m={8}
                l={8}
                xl={8}
            />
        </Col>
    )
}

export default Search;