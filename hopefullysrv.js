var apiai = require('apiai');

var app = apiai("fa1c6aa88e8e4027a6233cb63f2f73aa");

var request = app.textRequest('whoo', {
    sessionId: 'mw23455667'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
