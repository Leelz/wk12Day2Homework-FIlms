var Film = require('../film');
var assert = require('assert');

describe('Film', function() {
  var film;

  beforeEach(function() {
    film = new Film({
      title: 'Titanic',
      genres: ['Drama']
    });
  });

  it('should have title titanic', function() {
    assert.equal(film.title, 'Titanic');
  });
});
