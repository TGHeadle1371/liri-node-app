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


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Switch to call Liri
switch (action) {
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
function spotify() {
    songTitle = process.argv[3];
    var nodeAargs = process.argv;
    var songTitle = "";
    for (var i = 2; i < nodeAargs.length; i++) {
        if (i > 2 && i < nodeAargs.length) {
            songTitle = songTitle + "_" + nodeAargs[i];
        } else {
            songTitle += nodeAargs[i];
        }
    }
    spotify.search({
            type: 'track',
            query: songTitle
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// OMDB API Movie Call
// node liri.js movie-this '<movie name here>'

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
            console.log(response.data.Title);
            console.log(response.data.Year);
            console.log(response.data.Ratings);
            console.log(response.data.Country);
            console.log(response.data.Language);
            console.log(response.data.Plot);
            console.log(response.data.Actors);
        }
    );
    if (movieName === null) {
        axios.get("http://www.omdbapi.com/?t=Mr+nobody&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log(response.data.Title);
                console.log(response.data.Year);
                console.log(response.data.Ratings);
                console.log(response.data.Country);
                console.log(response.data.Language);
                console.log(response.data.Plot);
                console.log(response.data.Actors);
                console.log('If you havent watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/ Its on Netflix!');
            }
        );
        // Then run a request with axios to the OMDB API with the movie specified
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        // This line is just to help us debug against the actual URL.
        console.log(queryUrl);
    }
}

// You 'll use Axios to grab data from the OMDB API and the Bands In Town API
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// node liri.js concert-this <artist/band name here>
// Bands in town
function bands() {
    artist = process.argv[3];
    var args = process.argv;
    var artist = "";
    for (var i = 2; i < args.length; i++) {
        if (i > 2 && i < args.length) {
            artist = artist + "_" + args[i];
        } else {
            artist += args[i];
        }
    }
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log(response.data.VenueData);
            console.log(response.data.EventData.datetime.moment("MM/DD/YYYY").format("MM/DD/YYYY"));
        } // Event Data date time with Moment.js
    );
    // Then run a request with axios to the OMDB API with the movie specified
    var qryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    // This line is just to help us debug against the actual URL.
    console.log(qryURL);
}