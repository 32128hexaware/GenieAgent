var apiai = require('apiai');
var prompt = require('prompt')
var access_token = "e0953be2010e4d47b3b624dd3747d4f2";
var app = apiai(access_token);


run_main('hi');

function run_main(query1) {
	var request = app.textRequest(query1);
	//console.log(request);
	request.on('response', function(response) {

      console.log("Got response it seems")

	});

	request.on('error', function(error) {
	    console.log(error);
	});

	request.end()
}
