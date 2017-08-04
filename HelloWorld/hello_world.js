var http = require("http");


// This code is enough to create an HTTP server
// which listens/waits for a request over port 8081 on the local machine
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200: OK
    // Content Type: T
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the resonse body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server is running at http://127.0.0.1:8081/');
