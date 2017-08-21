# Learning Node.js Modules

## Modules

Modules are similar to JavaScript Libraries. They are a set of functions that we can include in our application.

## Including Modules

To include a module, we must use the `require()` function. Example:

```javascript
var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Hello World!");
}).listen(8080);
```

The above code will create a local server that responds to requests by saying **Hello World** when you go to the address: [http://localhost:8080/] on your web browser.

* A list of built in Node.js Modules can be found [here](https://www.w3schools.com/nodejs/ref_modules.asp).

## Creating our own modules

We can create our own modules that we can include in our applications. This is useful for when we need to build a big application by focusing on smaller components and putting them together.

Example:

```javascript
exports.myDateTime = function () {
    return Date();
};
```

`exports` is used to make this module available outside of the file, so other files can use this module.

## Including our module

Suppose we saved the myDateTime module in a file called **myfirstmodule.js** then we can use this module in other parts of our applicaiton like so:

```javascript
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);
```

The `require("./myfirstmodule")` command looks at our file system and finds the module that we created and saved in the file called **myfirstmodule.js** and fetches it. Now `dt` can use this module within our current file.

# File System Module

Node.js file system module allows us to use the computers file system and do common operations such as:
- Read Files
- Create Files
- Update Files
- Delete Files
- Rename Files

## Read Files

The `fs.readFile()` method is used to read files on the computer

Example:

```javascript
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('INSERT_HTML_FILE_NAME_HERE.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
    });
}).listen(8080);
```

The above code will display on port 8080 the .html file that we ask node.js to read

## Create Files

The File System has methods for creating new files:
- fs.appendFile()
- fs.open()
- fs.writeFile()

### Append File

The `fs.appendFile()` method appends content that we provide to the end of the file that we provide. If the file does not exist, the file will be created.

Example:

```javascript
var fs = require('http');

fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});
```

### Open File

The `fs.open()` method takes a "flag" as the second argument. ex: if the flage is "w" for write, the open method will open the specified file for writing. If the file doesn't exist, then an empty file is created

Example:

```javascript
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
```

### Write File

The `fs.writeFile()` method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created.

Example:

```javascript
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
```

## Update Files

The File System module has methods for updating files

- fs.appendFile()
- fs.writeFile()

The `fs.appendFile()` method appends specified content at the end of the specified file

Example:

```javascript
var fs = require('fs');

fs.append('mynewfile1.txt', ' This is my text.', function(err) {
    if (err) throw err;
    console.log('Updated!');
});
```

### Delete Files

Deleting a file with the File System Module can be done using the fs.unlink() method

Example:

```javascript
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});
```
### Rename Files

Renaming files with the File System Module can be done using the fs.rename() method

Example:

```
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});
```

## Credit

All of these examples/code can be found [here](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)

Thanks to w3schools for helping me in learning NodeJS modules
