// LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
// Make a new GitHub repository called liri - node - app and clone it to your computer.
// To retrieve the data that will power this app, you 'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. You'
// ll find these Node packages crucial
// for your assignment.



// Node - Spotify - API

// Axios
var axios = require("axios");
movieName = process.argv[2];
var nodeArgs = process.argv;
var movieName = "";
for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "_" + nodeArgs[i];
    } else {
        movieName += nodeArgs[i];
    }
}
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.Ratings);
        console.log(response.data.Genre);
        console.log("This movie was released in:" + response.data.Released);
    }
);
// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// This line is just to help us debug against the actual URL.
console.log(queryUrl);
// You 'll use Axios to grab data from the OMDB API and the Bands In Town API



// Moment
// DotEnv

var keys = require("keys.js");
require("dotenv").config();

var spotify = new Spotify(keys.spotify);