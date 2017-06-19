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

 var apiai = require('apiai');

var app = apiai("807237fd5b044892a70b24fd31801bba");

var request = app.textRequest('<Your text query>', {
    sessionId: '52369'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
