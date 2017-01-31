var express = require('express');
var app = express();
var filmRouter = express.Router();
//models
//since we don't have a database we'll use our front end models at the moment
// var films = require('../client/src/models/films')();
// var Film = require('../client/src/models/film');
// var Review = require('../client/src/models/review');

var FilmQuery = require('../client/db/filmQuery.js')
var query = new FilmQuery();

//film by id
filmRouter.get('/:id', function(req, res){
  res.json(films[req.params.id]);
});

//film index
filmRouter.get('/', function(req, res) {
  // res.json(films);
  query.all(function(results){
    res.json(results);
  });
});

//film update
filmRouter.put('/:id', function(req, res) {
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films[req.params.id] = film;
  res.json({data: films});
});

//add new film
filmRouter.post('/', function(req, res) {
  var film = new Film({
    title: req.body.title,
    genre: req.body.genre,
    actors: req.body.actors 
  });
  query.add(film);
  query.all(function(results){
  res.json(results);
  });
})

//delete film
filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({data: films});
});

//add review
filmRouter.post('/:id/reviews', function(req, res) {
  var film = films[req.params.id];
  var review1 = new Review({
    comment: "Amaze",
    rating: 10,
    author: "Val"
  });
  film.addReview(review1);
  res.json({data: films});
});


module.exports = filmRouter;
