import axios from 'axios';

import { useState, useContext } from 'react';
import { MovieListContext } from '../../hooks/MovieList';
import { API_URL } from '../../constants/Constants';

//  BUG FIX "M is not defined"
import 'materialize-css/dist/css/materialize.min.css';
import { TextInput, Col } from 'react-materialize';

import './Search.scss';

const Search = () => {
  const [search, setSearch] = useState('');
  const [
    movies,
    setMovies,
    isLoading,
    setLoading,
    testVal,
    setTestVal,
  ] = useContext(MovieListContext);

  const doSearch = (input) => {
    //  Prevent sending request when user is erasing input and there's no letters left.
    if (input === '') return null;
    setLoading(true);
    try {
      axios
        .get(`${API_URL}/${input}`)
        .then((res) => {
          let parsedMovies = res.data.results;
          //  Remove movies without picture or resume
          parsedMovies = parsedMovies.filter(
            (movie) => movie.backdrop_path && movie.overview
          );
          setMovies(parsedMovies);
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSearch = (search) => {
    setSearch(search);
    const input = search;
    doSearch(input);
  };
  return (
    <Col xs={8} s={12} m={12} l={9} className="search valign-wrapper">
      <TextInput
        className="search--input"
        label="Search a movie"
        xs={4}
        s={12}
        m={12}
        l={8}
        xl={8}
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Col>
  );
};

export default Search;
