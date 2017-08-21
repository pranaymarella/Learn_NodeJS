// Node.js File System module allows us to work with the computers file system
var http = require('http');
var fs = require('fs');

// common uses: Read, Create, Update, Delete, and Rename files
http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
