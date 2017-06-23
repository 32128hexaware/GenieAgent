'use strict';
var apiai = require('apiai');

var appai = apiai("fa1c6aa88e8e4027a6233cb63f2f73aa");

var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var options = {
    sessionId: '567yh8'
};

 app.post('/',function(req,res){
      console.log('REQUESTTTTT:::'+JSON.stringify(req.body));



      if(req.body.result.metadata.intentName == 'Default Welcome Intent'){
        var resagent="I got you buddy";
      }else{
        var resagent="Sorry, I could not recogonise you";
      }
      console.log("Response is "+res);
      return res.json({
        speech:resagent,
        displayText: resagent,
        source:'genieagent'
      });

});







app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
