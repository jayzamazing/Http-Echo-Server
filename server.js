//import express and create app object for usage
var express = require('express');
var app = express();
/*
* Function that deals with responding to a request for /headers
* @response - headers from the request
*/
app.get('/headers', function(request, response) {
  //send back json response with the request headers
  response.json(request.headers);
});
/*
* Function that deals with responding to a request for /headers/:header_name
* @response - specific header from the request
*/
app.get('/headers/:header_name', function(request, response) {
  //get the requested header name
  var header = request.params.header_name;
  //get the header from the request
  var req = request.headers[header];
  //send requested header back
  response.json(req);
});
/*
* Function to deal with requests for /version
* @response - http version number of request
*/
app.get('/version', function(request, response) {
  //return http version
  response.json(request.httpVersion);
});
//start the server with port and ip
app.listen(process.env.PORT, process.env.IP);
