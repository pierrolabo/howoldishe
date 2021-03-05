import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Movie from './pages/Movie';
import NoMatch from './pages/NoMatch';

const axios = require('axios');

const App = () => {
  const [info, setInfo] = useState('nothing');
  const URL = 'http://localhost:2000/api/movies';

  return (
    <div className="App">
      <Switch>
        <Route strict path="/movie/:id">
          <Movie />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
