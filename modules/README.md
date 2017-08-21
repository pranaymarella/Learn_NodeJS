# Learning Node.js Modules

## Modules
Modules are similar to JavaScript Libraries. They are a set of functions that we can include in our application.

## Including Modules
To include a module, we must use the 'require()' function. Example:
'''
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
'''

The above code will create a local server that responds to requests by saying 'Hello World' when you go to the address: 'http://localhost:8080/' on your web browser.

* A list of built in Node.js Modules can be found [here] (https://www.w3schools.com/nodejs/ref_modules.asp).

## Creating our own modules

We can create our own modules that we can include in our applications. This is useful for when we need to build a big application by focusing on smaller components and putting them together.

Example:
'''
exports.myDateTime = function () {
    return Date();
};
'''

'exports' is used to make this module available outside of the file, so other files can use this module.

## Including our module

Suppose we saved the myDateTime module in a file called **myfirstmodule.js** then we can use this module in other parts of our applicaiton like so:

'''
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);
'''

The 'require("./myfirstmodule")' command looks at our file system and finds the module that we created and saved in the file called **myfirstmodule.js** and fetches it. Now 'dt' can use this module within our current file.
