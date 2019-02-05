// LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
// Make a new GitHub repository called liri - node - app and clone it to your computer.
// To retrieve the data that will power this app, you 'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. You'
// ll find these Node packages crucial
// for your assignment.
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Grab Keys.js and store as keys var
var keys = require("./keys.js");
// Require Axios
var axios = require("axios");
// Require dotenv
require("dotenv").config();
// Load the fs package to read and write
var fs = require("fs");
// Spotify API
var spotify = new Spotify(keys.spotify);

//Require spotify node
var Spotify = require('node-spotify-api');

//Grab User Input
var title = process.argv[3];
var nodeAargs = process.argv;
var title = "";
// Allow for user input to be any length
for (var i = 2; i < nodeAargs.length; i++) {
    if (i > 2 && i < nodeAargs.length) {
        title = title + " " + nodeAargs[i];
    } else {
        title += nodeAargs[i];
    }
}


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
var command = process.argv[2];

// Switch to call Liri
switch (command) {
    case "concert-this":
        bands();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        movie();
        break;
        // case "do-what-it-says":
        //     do();
        //     break;

}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// node liri.js spotify-this-song '<song name here>'
// Artist(s)
// The song 's name
// A preview link of the song from Spotify
// The album that the song is from
// Spotify API Calls
spotify = function (title) {

    spotify.search({
            type: 'track',
            query: title
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
    // If the song is not there, display Ace of Base "The Sign"
    if (songTitle === "") {
        spotify.search({
                type: 'track',
                query: "The Sign"
            })
            .then(function (response) {
                console.log(response);
            });
    }
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// OMDB API Movie Call
// node liri.js movie-this '<movie name here>'

movie = function (title) {

    axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("---------------------------");
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("Ratings:");
            console.log(response.data.Ratings[0]);
            console.log(response.data.Ratings[1]);
            console.log("Country Made: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("---------------------------");
        }
    );
    //If no movie, display mr.nobody
    if (title === "") {
        axios.get("http://www.omdbapi.com/?t=Mr+nobody&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log("We can't find something without a word, so heres a suggestion!");
                console.log("---------------------------");
                console.log("Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("Ratings:");
                console.log(response.data.Ratings[0]);
                console.log(response.data.Ratings[1]);
                console.log("Country Made: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("---------------------------");
                console.log('If you havent watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/ Its on Netflix!');
            }
        );
        // Then run a request with axios to the OMDB API with the movie specified
        var queryUrl = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";
        // This line is just to help us debug against the actual URL.
        console.log(queryUrl);
    }
};

// You 'll use Axios to grab data from the OMDB API and the Bands In Town API
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// node liri.js concert-this <artist/band name here>
// Bands in town
bands = function (title) {

    axios.get("https://rest.bandsintown.com/artists/" + title + "/events?app_id=codingbootcamp&date=upcoming").then(
        function (response) {
            console.log("-------------------------");
            console.log(response.data[0].lineup);
            console.log("-------------------------");
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city);
            console.log(response.data[0].datetime);
            console.log("-------------------------");
            console.log(response.data[1].venue.name);
            console.log(response.data[1].venue.city);
            console.log(response.data[1].datetime);
            console.log("-------------------------");
            console.log(response.data[2].venue.name);
            console.log(response.data[2].venue.city);
            console.log(response.data[2].datetime);
            console.log("-------------------------");

        } // Event Data date time with Moment.js
    );
    // Then run a request with axios to the OMDB API with the movie specified
    var qryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";
    // This line is just to help us debug against the actual URL.
    console.log(qryURL);

    if (title === "") {
        axios.get("https://rest.bandsintown.com/artists/Chris%20Stapleton/events?app_id=codingbootcamp&date=upcoming").then(
            function (response) {
                console.log("-------------------------");
                console.log("There was no input, so heres a suggestion!");
                console.log(response.data[0].lineup);
                console.log("-------------------------");
                console.log(response.data[0].venue.name);
                console.log(response.data[0].venue.city);
                console.log(response.data[0].datetime);
                console.log("-------------------------");
                console.log(response.data[1].venue.name);
                console.log(response.data[1].venue.city);
                console.log(response.data[1].datetime);
                console.log("-------------------------");
                console.log(response.data[2].venue.name);
                console.log(response.data[2].venue.city);
                console.log(response.data[2].datetime);
                console.log("-------------------------");

            } // Event Data date time with Moment.js
        );
    }
};