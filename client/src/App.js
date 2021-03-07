import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import NoMatch from './pages/NoMatch';

const App = () => {
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
