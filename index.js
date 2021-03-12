/**
* Prototype Google Lifesciences API - v2Beta1
* Authentication Using service account key file
* Hariprasadr@google.com
 */
var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const util = require('util');

const {OAuth2Client} = require('google-auth-library');
const http = require('http');
const url = require('url');
const opn = require('opn');
const destroyer = require('server-destroy');

// Download your OAuth2 configuration from the Google
//const keys = require('./oauth2.keys.json');

 var app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(express.static(path.join(__dirname, 'public')));


 /* Routes  */
 app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, '/public', 'index.html'));
 });



 app.listen(8080, function () {
     console.log('Google Lifesciences API UI running on port 8080!');
 });
