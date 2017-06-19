/*var express = require('express')
var app = express();

 app.set('port', (process.env.PORT || 5000))
 app.use(express.static(__dirname + '/public'))

 app.get('/', function(request, response) {
  response.send('Hello World!')
})
*/
/*
'use strict';
var apiai = require('apiai');

var appai = apiai("807237fd5b044892a70b24fd31801bba");

var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var options = {
    sessionId: '33333'
};

 app.listen(app.get('port'), function() {
   console.log("Node app is running at localhost:" + app.get('port'))
 })*/

 'use strict';
 var apiai = require('apiai');

 var appai = apiai("807237fd5b044892a70b24fd31801bba");

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
   var apiagentreq=req.body.result&&req.body.result.parameters;
   var resagent=' PHONE BOOK chat bot';
   var resagent1='please enter phone model1';
 console.log('request are'+apiagentreq);
 if (apiagentreq==="hi")
 {
   return res.json({
     speech:resagent,
     displayText: resagent,
     source:'hello ticket book'  });
  }
     else {
       return res.json({
         speech:resagent,
         displayText: resagent1,
         source:'hello ticket book'  });
     }





 });







 app.listen(portC, function(){
     console.log('AGENT is running my app on  PORT: ' + portC);
 });
