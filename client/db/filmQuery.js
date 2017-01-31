var MongoClient = require('mongodb').MongoClient;

var FilmQuery = function() {
  this.url = 'mongodb://localhost:27017/ratings_site'
};

FilmQuery.prototype = {
  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) 
    {
        var collection = db.collection('films');
        collection.find().toArray(function(err, docs) 
        {
          onQueryFinished(docs);
        });
    });
  },
  add: function (film) {
  MongoClient.connect(this.url, function(err, db) 
    {
        var collection = db.collection('films');
        collection.insert(film);
    })
  }
};

module.exports = FilmQuery