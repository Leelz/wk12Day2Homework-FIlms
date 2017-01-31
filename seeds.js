use ratings_site;

db.films.insert([
  { 
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"],
    genre: "Mystery",
    reviews: [{
      comment: "It's not even a thing. What just happened. I want my life back.",
      rating: 1,
      author: "Val"}]
  },
  { 
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"],
    genre: "Action",
    reviews: [{
      comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
      rating: 101,
      author: "Val"
    }]
  }]
);