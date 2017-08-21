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
