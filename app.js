var express = require('express');
var app = express();
var port = 8040;


// route public pour charger avant les pages 
app.use(express.static('public'));



// utilisation des template ejs 
app.set("view engine", "ejs");


app.get('/', function(req, res) {
    didier(res);

});

function didier (res){
    res.render('index',{
        prenom:'didier', nom:'VILRUS'
    })
}



// // port d'écoute
app.listen(port, function() { 
    console.log("Listening on port 8040")
});