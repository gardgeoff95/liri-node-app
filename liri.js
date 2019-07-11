
require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

var actions = process.argv[2];
var arguments = process.argv.slice(3).join(" ");
   
     
  



if (actions == "spotify-this-song") {
    spotify.search({ type: "track", query: arguments }, function (err, data) {
        if (err) {
            return console.log("Error Occured: " + err);
        }

        var firstSong = data.tracks.items[0];
        console.log("Song Name: " + firstSong.name);
        console.log("Album Name: " + firstSong.album.name);
        console.log("Artist(s): " + firstSong.artists[0].name);
        console.log("Preview Link: "+ firstSong)


    })
}


if (actions == "movie-this") {

    if (arguments != "") {
        arguments = arguments.replace(/\s/g, '+');
    } else {
        arguments = "Mr.+Nobody"


    }
    axios
        .get("http://www.omdbapi.com/?i=tt3896198&apikey=462cd14b&t=" + arguments)
        .then(function (res) {

            var results = res.data;

            console.log("Title: " + results.Title);
            console.log("Year it Came Out: " + results.Released);
            console.log("IMDB Rating: " + results.imdbRating);
            console.log("Rotten Tomatoes Rating: " + results.Ratings[1].Value);
            console.log("Released in: " + results.Country);
            console.log("Language: " + results.Language);
            console.log("Plot: " + results.Plot);
            console.log("Actors: " + results.Actors);


        })
}

if (actions == "concert-this"){
    arguments = arguments.trim().replace(/\s/g, '+');
    debugger;
    axios
        .get("https://rest.bandsintown.com/artists/" + arguments + "/events?app_id=codingbootcamp")
        .then(function(res){
            var results =res.data;
            
            for (key in results){
                console.log("----------------------------------------")
                
                console.log (results[key].venue.name);
                console.log(results[key].venue.city + ", " + results[key].venue.country);
            }

        });

    
}