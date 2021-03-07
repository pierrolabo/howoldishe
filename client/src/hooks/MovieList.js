import axios from 'axios';

import { createContext, useState, useEffect } from 'react';
import { API_URL } from '../constants/Constants';

const MovieListContext = createContext();

const MovieListProvider = (props) => {
  const [movies, setMovies] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get(`${API_URL}/top`).then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <MovieListContext.Provider
      value={[movies, setMovies, isLoading, setLoading]}
    >
      {props.children}
    </MovieListContext.Provider>
  );
};
export { MovieListContext, MovieListProvider };
