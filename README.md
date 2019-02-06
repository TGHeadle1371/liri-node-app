## LIRI Node App

### Introduction

-   Node.js app called LIRI that is similiar to SIRI for the iPhone
-   Must be ran in a command line
-   LIRI: Language Interpretation and Recognition Interface.
-   LIRI will be a command line node app that takes in parameters and gives you back data.
-   LIRI will do any of the below command when you enter them into the command line. 1. spotify-this-song 2. concert-this 3. movie-this 4. do-what-it-says

-   Type:

```
node liri.js
```

-   with the correct command proceeding, followed by a search input of your choice

##### Example for spotify-this-song

```
node liri.js spotify-this-song '<song name here>'
```

-   shows the following information about the song in the terminal

*   It will first prompt if it loads with, "This is loaded"
*   Then it will find the following:

1. artist(s)
2. song name
3. preview link of the song from spotify
4. album that the song is a part of

##### Example for concert-this

```
node liri.js concert-this '<artist name here>'
```

-   To find concerts with LIRI, we use concert-this
-   Simple type an artist following the words 'concert-this'
-   and the following information will be displayed:

1. Your Artist Name
2. The Venue
3. What City the Venue is in
4. Date and Time of the concert

##### Example for movie-this

```
node liri.js movie-this '<movie name here>'
```

-   this would output the following information to the terminal:

1. Title
2. Release Year
3. IMDB Rating
4. Rotten Tomatoes Rating
5. Country it was made in
6. Language
7. Plot
8. Actors

##### Example for do what it says

```
node liri.js do-what-it-says
```

-   This command grabs information from a .txt file and reads it

<!-- *   These are the npm packages I used and are needed to run the app

1. fs package in node
2. [spotify](https://www.npmjs.com/package/spotify)
3. [request](https://www.npmjs.com/package/request)

-   to install these npm packages run these commands one at a time.

```
npm install spotify
npm install request
``` -->

# Copyright

Thomas Headle &copy; 2019. All Rights Reserved.
