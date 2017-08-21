// 'http' is a building Node.js module that allows Node.js to transfer data over HTTP (Hyper Text Transfer Protocol)
var http = require('http');
// built in module that helps to easily split query string into readable parts
var url = require('url');
// server object
http.createServer(function (req, res) {
    // if response needs to be displayed as http, include HTTP header with proper content type
    res.writeHead(200, {'Content-Type': 'text/html'});
    // the 'req' argument represents the request from the client as an object (http.IncomingMessage object)
    // which has a property called 'url' which holds the part of the url that comes after the domain name
    // res.write(req.url);
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;
    // end the response
    res.end(text);
}).listen(8080); // server is listening to requests on port 8080
