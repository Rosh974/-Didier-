var express = require('express');
var app = express();
var port = 8040;


// route public pour charger avant les pages 
app.use(express.static('public'));



// utilisation des template ejs 
app.set("view engine", "ejs");

// route principale qui affichera le nom et le prenom sur la page index via ejs
app.get('/', function (req, res) {
    didier(res);

});

// fonction qui retourne le nom et le prenom en paramètre
function didier(res) {
    res.render('index', {
        prenom: 'didier', nom: 'VILRUS'
    })
}


// port d'écoute
app.listen(port, function () {
    console.log("Listening on port 8040")
});