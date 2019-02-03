// LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
// Make a new GitHub repository called liri - node - app and clone it to your computer.
// To retrieve the data that will power this app, you 'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. You'
// ll find these Node packages crucial
// for your assignment.
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Grab Keys.js and store as keys var
// var keys = require("./keys.js");
// Require Axios
var axios = require("axios");
// Require dotenv
// require("dotenv").config();
// Load the fs package to read and write
// var fs = require("fs");
// Spotify API
// var spotify = new Spotify(keys.spotify);
// Require spotify node
// var Spotify = require('node-spotify-api');
// Store all of the arguments in an array
var nodeArgs = process.argv[3];

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    } else {
        movieName += nodeArgs[i];

    }
}
switch (movieName) {
    case "movie-this":
        movie();
        break;
        // case "do-what-it-says":
        //     do();
        //     break;

}

function movie() {
    movieName = process.argv[3];
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
            console.log(response.data);
            // console.log(response.data.Title);
            // console.log(response.data.Year);
            // console.log(response.data.Ratings);
            // console.log(response.data.Country);
            // console.log(response.data.Language);
            // console.log(response.data.Plot);
            // console.log(response.data.Actors);
        }
    );
    // //If no movie, display mr.nobody
    // if (movieName === null) {
    //     axios.get("http://www.omdbapi.com/?t=Mr+nobody&y=&plot=short&apikey=trilogy").then(
    //         function (response) {
    //             console.log(response.data.Title);
    //             console.log(response.data.Year);
    //             console.log(response.data.Ratings);
    //             console.log(response.data.Country);
    //             console.log(response.data.Language);
    //             console.log(response.data.Plot);
    //             console.log(response.data.Actors);
    //             console.log('If you havent watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/ Its on Netflix!');
    //         }
    //     );
    //     // Then run a request with axios to the OMDB API with the movie specified
    //     var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    //     // This line is just to help us debug against the actual URL.
    //     console.log(queryUrl);
    // }
}