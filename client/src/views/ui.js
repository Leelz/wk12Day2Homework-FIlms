var Films = require('../models/films.js');

var UI = function() {
  this.films = new Films();
  // this.render(films);
  this.films.all(function (result) {
    this.render(result);

  }.bind(this))
  this.createForm();
  console.log("HERE");
  }

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createReview: function(li, review) {
    this.appendText(li, review.comment, 'Comment: ');
    this.appendText(li, review.rating, 'Rating: ');
    this.appendText(li, review.author, 'Author: ');
  },

  createForm: function() {
    // var formDiv = document.querySelector('#filmForm')

    var form = document.createElement('form')

    var title = document.createElement('input')
    title.setAttribute("type", "text");

    var genre = document.createElement('input')
    genre.setAttribute("type", "text"); 

    var actors = document.createElement('input')
    actors.setAttribute("type", "text");

    var submit = document.createElement('input')
    submit.setAttribute("type", "submit")

    console.log(genre)

    form.appendChild(title);
    form.appendChild(genre);
    form.appendChild(actors);
    form.appendChild(submit);

    formDiv.appendChild(form);

    form.onsubmit = function(event) {
      var film = {title: title.value, genre: genre.value, actors: actors.value}
      var jsonFilm = JSON.stringify(film);
      // event.preventDefault();

      this.films.makePostRequest("/api/films", function() {
        console.log(this.responseText);
      }, jsonFilm);
      }.bind(this);
  },
  render: function(films) {
    var container = document.getElementById('films');
    
    for (var film of films) {
      var li = document.createElement('li');
      this.appendText(li, film.title, 'Film: ');
      this.appendText(li, film.genre, 'Genre: ');
      
      for (var review of film.reviews){
        this.createReview(li, review);
        console.log("HERE");
      }
      container.appendChild(li);
    }
    //this.createForm() //this is the UI!
  }
}

module.exports = UI;