var express = require('express');

var app = express();

app.get('/races', function(req, res) {
    res.send([{name:'demo race 1'}, {name:'demo race 2'}]);
});
app.get('/races/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(process.env.PORT);
console.log('Listening on port '+process.env.PORT+'...');
