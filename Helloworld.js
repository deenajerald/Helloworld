/*var express = require('express')
var app = express();

 app.set('port', (process.env.PORT || 5000))
 app.use(express.static(__dirname + '/public'))

 app.get('/', function(request, response) {
  response.send('Hello World!')
})
*/
'use strict';
var apiai = require('./api/ApiInnovation/Helloworld');

var appai = apiai("421ac8ae-4418-4e7c-a822-beb84ec65d20");

var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var options = {
    sessionId: '567yh8'
};

 app.listen(app.get('port'), function() {
   console.log("Node app is running at localhost:" + app.get('port'))
 })
