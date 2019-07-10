require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

var actions = process.argv[2];
var arguments = ""
for (i = 3; i < process.argv.length; i ++ ){
    arguments += process.argv[i] + " ";

}
console.log(arguments);


spotify.search({type: "artist", query: arguments.trimRight()},function(err, data){
    if (err){
        return console.log("Error Occured: " + err);
    }
    console.log(data);

})