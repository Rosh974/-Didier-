var express = require('express');
var app = express();
var port = 8040;
const request = require('request');

// route public pour charger avant les pages 
app.use(express.static('public'));



// utilisation des template ejs 
app.set("view engine", "ejs");





















// // port d'écoute
app.listen(port, function() { 
    console.log("Listening on port 8040")
});