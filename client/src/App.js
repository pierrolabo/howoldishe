
import {useEffect, useState} from 'react';
import Home from './pages/Home';

const axios = require('axios');
const App = () => {
  const [info, setInfo] = useState("nothing");
  const URL = 'http://localhost:2000/api/movies';
  
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
