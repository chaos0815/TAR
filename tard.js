var express = require('express'),
    races   = require('./routes/races');

var app = express();

app.get('/races', races.findAll);
app.get('/races/:id', races.findById);

app.listen(process.env.PORT);
console.log('Listening on port '+process.env.PORT+'...');
