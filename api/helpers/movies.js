require('dotenv').config();
const axios = require('axios');
const key = process.env.API_KEY;
const lang = 'fr-FR';

//  Return all the details we need about a movie and its actors
async function getMovieDetails(id) {
  const movie = {};
  const details = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${lang}`
  );
  const cast = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
  );
  movie.details = details.data;
  movie.cast = await addPeopleInfoToCast(cast.data);
  console.log('finaldone: ');

  return movie;
}

//  add peoples details to the cast object
async function addPeopleInfoToCast(cast) {
  let arr = Array.from(cast.cast);
  let newArr = await arr.map(async people => {
    let peopleDetail = await getPeople(people.id);
    people.birthday = peopleDetail.birthday;
    people.deathday = peopleDetail.deathday;
    people.profil_path = peopleDetail.profil_path;
    //console.log(people);
    return people;
  });
  // I don't get it
  //new Arr has * property surrounded by promise {}
  // arr hasn't so we return arr
  await Promise.all(newArr);
  return arr;
}

//  Call api for people details
//  Return only what we need
async function getPeople(id) {
  let data = {};
  let res = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${lang}`
  );
  data.birthday = res.data.birthday;
  data.deathday = res.data.deathday;
  data.profile_path = res.data.profile_path;
  return data;
}

// Return the full movie details
exports.getMovie = async function(req, res) {
  const id = req.params.id;
  const movie = await getMovieDetails(id);
  res.json(movie);
};
//  Request the API for movies matching the keyword
exports.searchMovies = function(req, res) {
  let keyword = req.params.keyword;

  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=${lang}&query=${encodeURI(
        keyword
      )}&page=1&include_adult=false`
    )
    .then(data => {
      console.log('OK => searchMovies: ');
      //console.log(data.data);
      res.json(data.data);
    })
    .catch(err => {
      console.log('ERROR => searchMovies: ');
      console.log(err);
      res.send(err);
    });
};

//  Request the API for peoples matching the keyword
exports.searchPeoples = function(req, res) {
  let keyword = req.params.keyword;

  axios
    .get(
      `https://api.themoviedb.org/3/search/person?api_key=${key}&language=${lang}&query=${encodeURI(
        keyword
      )}&page=1&include_adult=false`
    )
    .then(data => {
      console.log('OK => getPeoples: ');
      console.log(data.data);
      res.json(data.data);
    })
    .catch(err => {
      console.log('ERROR => getPeoples: ');
      console.log(err);
      res.send(err);
    });
};

module.exports = exports;
