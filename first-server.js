var http: = require("http");

// Here we define a port to listen to

var PORT = 7000;
var PORT2 = 7500;

// Here we create a generic function to handle requests and responses

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.

// The below statement is triggered (client-side) when the user visits the PORT URL

// Here we start our server so that it can begin listening to client requests.



function requestA(request, response) {
  res.write("You are brilliant! Path Hit: " + request.url)
  res.end();
  // The below statement is triggered (server-side) when a user visits the PORT URL
};

function requestB(request, response) {
  res.write("You are brilliant! Path Hit: " + request.url)
  res.end();
  // The below statement is triggered (server-side) when a user visits the PORT URL
};


var serverA = http.createServer(requestA);
var serverB = http.createServer(requestB);


serverA.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});


function requestB(request, response) {
  res.write("You need improvement! Path Hit: " + request.url)
  res.end();
};

serverB.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:%s", PORT2);
});
