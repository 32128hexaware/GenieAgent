'use strict';
var apiai = require('apiai');

var appai = apiai("baf498c6d40a4a70b54ef80debdcbc33");

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
      return res.json({
        speech:resagent,
        displayText: resagent,
        source:'genieagent'
      });

});







app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
