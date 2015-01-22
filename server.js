var express = require('express');
var ejs = require('ejs');
var app = express();

app.get('/', function(req, res) {
  var obj = { results: {
  "profession": [ "tv star", "movie star" ],
  "known_for": ["college themed terrible show", "smart but sexy financial analyst on hit show on paid channel", "has new movie coming out with johnny depp"],
  "gender": "female",
  "first letter of first name": "O",
  "extra hint": "dates Aaron Rodgers"
}
}
  res.json( obj );
});

app.get('/Olivia_Munn', function(req, res) {
  var answer = "NICE JOB!";
    res.json({correct: "YOU WIN!"});
})

app.get('/:anything', function(reg, res) {
  var answer = "";
  res.json({ incorrect: "YOU ARE SO FAR OFF ITS NOT EVEN FUNNY! LOLOLOLOLOL HAHAHAHAHAHAHAHAHAHAHAHA"});
})

app.listen(3000);

console.log('listening on port 3000!');
