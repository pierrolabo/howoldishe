// const axios = require('axios');
//const URL = 'https://radiant-bastion-88357.herokuapp.com/api/movies/';
const URL = 'http://localhost:2000/api/movies/';
//const URL = 'http://localhost:5000/api/movies/';
const IMG_URL = 'https://image.tmdb.org/t/p';
const IMG_SIZE = 'w200';
const IMG_SIZE_POSTER = 'w300_and_h450_bestv2';
/* DOM Elements */
const searchInput = document.getElementById('searchField');
const form = document.getElementById('form');
const movieContainer = document.getElementById('movie-container');
const peoplesContainer = document.getElementById('peoples-container');

//  search
function search(input) {
  const keyword = input.value;
  axios
    .get(`${URL}${keyword}`)
    .then(function(response) {
      populateMovies(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

//  Get Top Trendin Movies
function getTopTrending() {
  movieContainer.innerHTML = `
  <div id="loader" class="preloader-wrapper big active">
  <div class="spinner-layer spinner-blue-only">
    <div class="circle-clipper left">
      <div class="circle"></div>
    </div><div class="gap-patch">
      <div class="circle"></div>
    </div><div class="circle-clipper right">
      <div class="circle"></div>
    </div>
  </div>
</div>
  `;
  axios.get(`${URL}top`).then(res => populateMovies(res));
  //document.getElementById('loader').classList.toggle('hide');
}
//  get Movie By Id
function getMovie(e) {
  const Elm = e.target.parentNode;
  if (Elm.dataset.movieid !== undefined) {
    const id = Elm.dataset.movieid;

    axios
      .get(`${URL}movie/${id}`)
      .then(function(response) {
        displayMovie(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
function displayMovie(movie) {
  const peoplesWithoutPictures = [];
  movieContainer.innerHTML = '';
  peoplesContainer.innerHTML = '';
  movieContainer.append(createMovieDetailsElm(movie.details));

  movie.cast.forEach(people => {
    // If people has no profil picture
    //  Put it in an array then display it in the end
    if (people.profile_path === null) {
      peoplesWithoutPictures.push(people);
      return;
    }

    peoplesContainer.appendChild(
      createActorCard(people, movie.details.release_date)
    );
  });
  peoplesWithoutPictures.forEach(people => {
    //  Display peoples without picture at the end
    peoplesContainer.appendChild(
      createActorCard(people, movie.details.release_date)
    );
  });
}

function populateMovies(data) {
  const movies = filterImagesDescription(data.data.results);
  movieContainer.innerHTML = ``;
  peoplesContainer.innerHTML = ``;
  movies.forEach(movie => {
    movieContainer.append(createMovieCard(movie));
  });
}

/*      HTML TEMPLATES      */

//  Create Actor Card
function createActorCard(cast, release) {
  let img = `${IMG_URL}/${IMG_SIZE}${cast.profile_path}`;
  let temp = document.createElement('div');
  temp.setAttribute('class', 'col s5 offset-s1 m4 xl4 people');

  let actorElm = `
  <div class="card">
  
    <div class="card-image">
      <img class="circle " src="${img}">
      <span class="card-title actor-character">${cast.character}</span>
      <span class="badge red right" style="color: #fff">${
        cast.birthday === null ? '?' : getAgeRelease(release, cast.birthday)
      }</span>
      
    </div>
    
    <div class="card-content">
      <span class="actor-detail">${cast.name}</span>
      <span class="actor-detail hide hide-on-med-and-down ">${
        cast.birthday === null
          ? 'Age: inconnu'
          : `Birth: ${cast.birthday} (age: ${getAge(cast.birthday)})`
      }</span>
      <span class="actor-detail hide">${
        cast.deathday === null ? 'NOT DEAD' : cast.deathday
      }</span>
      <span class="actor-detail hide">${
        cast.birthday === null
          ? 'Naissannce inconnu'
          : getAgeRelease(release, cast.birthday)
      } in the movie</span>
    </div>
    
    <div class="card-action">
    
    <span class="align-center ${
      cast.deathday !== null ? 'black' : 'green'
    } badge">${healthBadge(cast.birthday, cast.deathday)}
    </span>
    </div>
  

  `;
  temp.innerHTML = actorElm;
  return temp;
}

//  Create movie cards
function createMovieCard(movie) {
  let img = `${IMG_URL}/${IMG_SIZE}${movie.backdrop_path}`;

  let temp = document.createElement('div');
  temp.setAttribute('data-movieId', movie.id);
  temp.setAttribute('class', 'col s12 m6 xl4 movie');

  let movieElm = `
  
      <div class="card-small card hoverable">
        <div class="card-image" data-movieId="${movie.id}">
          <img src="${img}">
          <span class="card-title movies-title">${movie.title}</span>
        </div>
        <div class="card-content" data-movieId="${movie.id}">
          <p class="truncate">${movie.overview}</p>
        </div>
      </div>
    
                
    `;
  temp.innerHTML = movieElm;
  temp.addEventListener('click', e => getMovie(e));
  return temp;
}
//  Create single movie details
function createMovieDetailsElm(details) {
  let img_poster = `${IMG_URL}/${IMG_SIZE_POSTER}${details.backdrop_path}`;
  let img = `${IMG_URL}/${IMG_SIZE}${details.backdrop_path}`;
  let temp = document.createElement('div');
  temp.setAttribute('class', 'row details-movie');
  let movieDetailsElm = `
  
  <div class="col s12 m12">
   
  <div class="card small hide-on-med-and-up">
      <div class="card-image">
        <img class="image-responsive movie-details_img" src="${img}">
        <span class="card-title">${details.title}</span>
      </div>
      <div class="card-content">
        <p class="truncate">${details.overview}</p>
      </div>
      <div class="card-action">
        <span class="center">${details.release_date.split('-')[0]}</span>
      </div>
  </div>

  <!-- test -->
  <h2 class="center hide-on-small-only">${details.title}</h2>
    <div class="card horizontal hide-on-small-only ">
      <div class="card-image">
        <img src="${img_poster}">
      </div>
      <div class="card-stacked ">
        <div class="card-content">
          <p class="center-align">${details.overview}</p>
        </div>
        <div class="card-action">
        <span class="center-align">${details.release_date.split('-')[0]}</span>
        </div>
      </div>
    </div>
 

  </div>
  `;
  temp.innerHTML = movieDetailsElm;
  return temp;
}

/*  Helpers */

//  Get the difference between the release of the movie and the actor's age's
function getAgeRelease(release, birthday) {
  let rel = release.split('-')[0];
  let birth = birthday.split('-')[0];
  return rel - birth;
}
//  Get the difference between actual year and the actor's age's
function getAge(birthday) {
  let today = new Date();
  let birth = birthday.split('-')[0];
  return today.getFullYear() - birth;
}

//  pop entry without images or overview
function filterImagesDescription(movies) {
  return movies.filter(movie => {
    if (movie.backdrop_path !== null && movie.overview !== null) {
      return true;
    }
  });
}

function healthBadge(birthday, deathday) {
  if (deathday !== null) {
    return `
    <i class="fas fa-skull-crossbones" style="color: white"></i>
    `;
  }
  if (birthday === null) {
    return '?';
  }

  return getAge(birthday);
}
//  Add event listeners
form.addEventListener('submit', e => {
  search(searchInput);
});

getTopTrending();
