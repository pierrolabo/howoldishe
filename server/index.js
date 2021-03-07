let movieRoutes = require('./routes/movies');
let cors = require('cors');
let express = require('express');
let bodyParser = require('body-parser');

const PORT = 2000;

app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/movies', movieRoutes);
app.listen(PORT, () => {
  console.log('Running on port: ', PORT);
});
