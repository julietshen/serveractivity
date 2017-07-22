//dependencies

var http = require("http");
var url = require("url");
var PORT = 8080;
var fs = require("fs");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  fs.readFile(__dirname + "/practice.html", function(err, data) {
    //we respond to the client with the html page with an html file
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
      res.end(data);

      //saving the request method as a variable
      var method = req.method;
      var requestData = "";
      var output = "";

      //when the server receives data
      req.on("data", function(data) {
        //it adds it to requestData
        requestData += data;
        console.log(data);
      });

      req.on("end", function() {
        //we display the requet method as well as the data received
        output = "You just " + method + "\n";
        output += requestData.toString();
        console.log(output);
        res.end();
      });
  });
}

  server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
  });
