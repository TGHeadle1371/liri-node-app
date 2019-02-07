## LIRI Node App

### LIRI: Language Interpretation and Recognition Interface.

### Introduction

-   Node.js app called LIRI that is similiar to SIRI for the iPhone
-   Must be ran in a command line
-   LIRI will be a command line node app that takes in parameters and gives you back data.
-   LIRI will do any of the below command when you enter them into the command line.

#### Type:

###### For a list of commands

```
node liri.js
```

###### Followed by:

1. spotify-this-song
2. concert-this
3. movie-this
4. do-what-it-says

#### Example for spotify-this-song

```
node liri.js spotify-this-song '<song name here>'
```

![Spotify Image](/images/spotify-this-song.png)

#### Shows the following information:

-   It will first log "This is loaded",
-   Then it will find the following:

1. artist(s)
2. song name
3. preview link of the song from spotify
4. album that the song is a part of

#### Example for concert-this

```
node liri.js concert-this '<artist name here>'
```

![Spotify Image](/images/concert-this.png)

-   To find concerts with LIRI, we use concert-this
-   Simple type an artist following the words 'concert-this'
-   and the following information will be displayed:

1. Your Artist Name
2. The Venue
3. What City the Venue is in
4. Date and Time of the concert

#### Example for movie-this

```
node liri.js movie-this '<movie name here>'
```

![Spotify Image](/images/movie-this.png)

##### This would output the following information to the terminal:

1. Title
2. Release Year
3. IMDB Rating
4. Rotten Tomatoes Rating
5. Country it was made in
6. Language
7. Plot
8. Actors

#### Example for do-what-it-says

```
node liri.js do-what-it-says
```

![Spotify Image](/images/do-what-says.png)

-   This command grabs information from a .txt file and reads it

*   NPM Packages used

1. [spotify](https://www.npmjs.com/package/spotify)
2. [axios](https://www.npmjs.com/package/axios)
3. [moment](https://www.npmjs.com/package/moment)
4. [Dotenv](https://www.npmjs.com/package/dotenv)

-   to install these npm packages run these commands one at a time.

```
npm install spotify
npm install axios
npm install dotenv
npm install moment

```

##### Technologies

-   HTML
-   CSS
-   JavaScript
-   Node.js
-   Moment.js
-   fs read/write
-   [Bands In Town API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0)
-   [OMDB API](http://www.omdbapi.com/)
-   [Spotify API](https://developer.spotify.com/documentation/web-api/)
-   [Spotify npm package](https://www.npmjs.com/package/spotify)
-   [axios](https://www.npmjs.com/package/axios)
-   [moment](https://www.npmjs.com/package/moment)
-   [dotenv](https://www.npmjs.com/package/dotenv)

## Copyright

Thomas Headle &copy; 2019. All Rights Reserved.
