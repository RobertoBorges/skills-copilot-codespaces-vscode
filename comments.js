// Create a web server

// 1. Load the http module
var http = require('http');

// 2. Create an http server
var server = http.createServer(function (request, response) {
  // 3.1. Get the path of the URL
  var path = request.url;
  // 3.2. Log the request path
  console.log(path);
  // 3.3. Write the response
  response.write('Hello World!');
  // 3.4. End the response
  response.end();
});

// 4. Start the server
server.listen(3000, function () {
  console.log('Server started on port 3000');
});