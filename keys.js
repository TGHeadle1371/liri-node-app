// console.log('this is loaded');
console.log('To get started: \n --------------- \n Type <node liri-node-app> \n with one of the following commands after \n <movie-this> with a movie title after \n <concert-this> with an artist name after \n <spotify-this-song> with a song name after \n or <do-what-it-says> by itself \n --------------- ');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};