var apiai = require('apiai');
var express = require('express');
var bodyParser = require('body-parser');

var app = apiai("fa1c6aa88e8e4027a6233cb63f2f73aa");

var exp = express();

exp.get('/chat', function (req, res) {
  console.log(req);
})

exp.listen(( process.env.PORT || 3000));
