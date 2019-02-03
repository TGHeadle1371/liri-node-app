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
// var axios = require("axios");
var Spotify = require('node-spotify-api');
require('dotenv').config();


//Spotify Testing
// Grab Keys.js and store as keys var
var keys = require("./keys.js");

// Spotify API
var spotify = new Spotify(keys.spotify);

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
    spotify
        .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    // // If the song is not there, display Ace of Base "The Sign"
    // if (songTitle === "") {
    //     spotify.search({
    //             type: 'track',
    //             query: "The Sign"
    //         })
    //         .then(function (response) {
    //             console.log(response);
    //         });
    // }
}
spotify();

// bands in town testing
// Bands in town
// function bands() {
//     artist = process.argv[3];
//     var args = process.argv;
//     var artist = "";

//     for (var i = 2; i < args.length; i++) {
//         if (i > 2 && i < args.length) {
//             artist = artist + "%20" + args[i];
//         } else {
//             artist += args[i];
//         }
//     }
//     axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming").then(
//         function (response) {
//             console.log("-------------------------");
//             console.log(response.data[0].lineup);
//             console.log("-------------------------");
//             console.log(response.data[0].venue.name);
//             console.log(response.data[0].venue.city);
//             console.log(response.data[0].datetime);
//             console.log("-------------------------");
//             console.log(response.data[1].venue.name);
//             console.log(response.data[1].venue.city);
//             console.log(response.data[1].datetime);
//             console.log("-------------------------");
//             console.log(response.data[2].venue.name);
//             console.log(response.data[2].venue.city);
//             console.log(response.data[2].datetime);
//             console.log("-------------------------");

//         } // Event Data date time with Moment.js
//     );
//     // Then run a request with axios to the OMDB API with the movie specified
//     var qryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";
//     // This line is just to help us debug against the actual URL.
//     console.log(qryURL);

//     if (artist === "") {
//         axios.get("https://rest.bandsintown.com/artists/Chris%20Stapleton/events?app_id=codingbootcamp&date=upcoming").then(
//             function (response) {
//                 console.log("-------------------------");
//                 console.log("There was no input, so heres a suggestion!");
//                 console.log(response.data[0].lineup);
//                 console.log("-------------------------");
//                 console.log(response.data[0].venue.name);
//                 console.log(response.data[0].venue.city);
//                 console.log(response.data[0].datetime);
//                 console.log("-------------------------");
//                 console.log(response.data[1].venue.name);
//                 console.log(response.data[1].venue.city);
//                 console.log(response.data[1].datetime);
//                 console.log("-------------------------");
//                 console.log(response.data[2].venue.name);
//                 console.log(response.data[2].venue.city);
//                 console.log(response.data[2].datetime);
//                 console.log("-------------------------");

//             } // Event Data date time with Moment.js
//         );
//     }
// }
// bands();
// Require dotenv
// require("dotenv").config();
// Load the fs package to read and write
// var fs = require("fs");
// Spotify API
// var spotify = new Spotify(keys.spotify);
// Require spotify node
// var Spotify = require('node-spotify-api');
// Store all of the arguments in an array


// switch (process.argv[3]) {
//     case "movie-this":
//         movie();
//         break;
//         // case "do-what-it-says":
//         //     do();
//         //     break;

// }
// Movie Testing
// function movie() {
//     // Store all of the arguments in an array
//     var nodeArgs = process.argv;

//     // Create an empty variable for holding the movie name
//     var movieName = "";

//     // Loop through all the words in the node argument
//     // And do a little for-loop magic to handle the inclusion of "+"s
//     for (var i = 2; i < nodeArgs.length; i++) {

//         if (i > 2 && i < nodeArgs.length) {
//             movieName = movieName + "+" + nodeArgs[i];
//         } else {
//             movieName += nodeArgs[i];

//         }
//     }

//     axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
//         function (response) {
//             console.log("---------------------------");
//             console.log("Title: " + response.data.Title);
//             console.log("Release Year: " + response.data.Year);
//             console.log("Ratings:");
//             console.log(response.data.Ratings[0]);
//             console.log(response.data.Ratings[1]);
//             console.log("Country Made: " + response.data.Country);
//             console.log("Language: " + response.data.Language);
//             console.log("Plot: " + response.data.Plot);
//             console.log("Actors: " + response.data.Actors);
//             console.log("---------------------------");
//         }
//     );
//     //If no movie, display mr.nobody
//     if (movieName === "") {
//         axios.get("http://www.omdbapi.com/?t=Mr+nobody&y=&plot=short&apikey=trilogy").then(
//             function (response) {
//                 console.log("We can't find something without a word, so heres a suggestion!");
//                 console.log("---------------------------");
//                 console.log("Title: " + response.data.Title);
//                 console.log("Release Year: " + response.data.Year);
//                 console.log("Ratings:");
//                 console.log(response.data.Ratings[0]);
//                 console.log(response.data.Ratings[1]);
//                 console.log("Country Made: " + response.data.Country);
//                 console.log("Language: " + response.data.Language);
//                 console.log("Plot: " + response.data.Plot);
//                 console.log("Actors: " + response.data.Actors);
//                 console.log("---------------------------");
//                 console.log('If you havent watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/ Its on Netflix!');
//             }
//         );
//         // Then run a request with axios to the OMDB API with the movie specified
//         var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//         // This line is just to help us debug against the actual URL.
//         console.log(queryUrl);
//     }
// }
// movie();