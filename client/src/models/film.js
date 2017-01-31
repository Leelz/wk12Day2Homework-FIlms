var Film = function(options) {
  this.title = options.title;
  this.actors = options.actors;
  this.reviews = options.reviews || [];
  this.genre = options.genre;
}

Film.prototype = {
  addReview: function(review) {
    this.reviews.push(review);
  }
}

module.exports = Film;
