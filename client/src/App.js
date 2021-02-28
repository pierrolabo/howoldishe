
import {useEffect, useState} from 'react';

const axios = require('axios');
const App = () => {
  const [info, setInfo] = useState("nothing");
  const URL = 'http://localhost:2000/api/movies';
  useEffect(() => {
      console.log("pwet mounted")
      setInfo("mounted")
      axios.get(`${URL}/top`).then(res => console.log(res));

  }, [setInfo])
  return (
    <div className="App">
      <h1>pouf</h1>
      <h3>debug: {info}</h3>
    </div>
  );
}

export default App;
