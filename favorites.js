var url = require("url");
var http = require("http");
var fs = require("fs");
var PORT = 8080;
var server = http.createServer(handleRequest);


function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case "/":
    fs.readFile("serveractivity/index.html", function(err, data) {
    //we respond to the client with the html page with an html file
      res.writeHead(200, {Content-Type: "text/html"});
      res.end(data);
      break;
    });
    case "/food":
      fs.readFile("serveractivity/food.html", function(err, data) {
      res.writeHead(200, {Content-Type: "text/html"});
      res.end(data);
    });
      break;
    case "/movies":
    fs.readFile("serveractivity/movies.html", function(err, data) {
    res.writeHead(200, {Content-Type: "text/html"});
    res.end(data);
  });
    break;
    case "/frameworks":
    fs.readFile("serveractivity/frameworks.html", function(err, data) {
    res.writeHead(200, {Content-Type: "text/html"});
    res.end(data);
  });
    break;
    default:
    fs.readFile("serveractivity/index.html", function(err, data) {
    //we respond to the client with the html page with an html file
      res.writeHead(200, {Content-Type: "text/html"});
      res.end(data);
      break;
      }
}

server.listen(PORT, function() {
  console.log("Server is listening on: " + PORT)
});
