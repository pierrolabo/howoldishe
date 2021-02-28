let express = require('express');
let router = express.Router();
// let db = require('../models');
let helpers = require('../helpers/movies');

router.route('/:keyword').get(helpers.searchMovies);

//router.route('/movie/:id').get(helpers.getMovie);

router.route('/peoples/:keyword').get(helpers.searchPeoples);

//router.route('/peoples/people/:id').get(helpers.getPeople);

router.route('/movie/:id').get(helpers.getMovie);
module.exports = router;
