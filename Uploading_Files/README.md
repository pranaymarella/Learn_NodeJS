# Learning Node.js: Uploading Files

## Formidable Module

The best module to work with file uploads using node.js is `Formidable`

We can download this module using the NPM in your command line interface as:

```
npm install formidable
```

We can include this in our code as:

```javascript
var formidable = require('formidable');
```

## Uploading Files

### Step 1: Creating an Upload Form

We must create a node.js file that writes an HTML form that contains an upload field

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data>"');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);
```

With the above code, we are creating a simple HTML form that accepts a file to be used for upload

### Step 2: Parsing the Uploaded File

To be able to parse the uploaded file, we can use the formidable module.

When the file is uploaded and parsed, it is placed in a temporary folder in the computer

```javascript
var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            res.write('File uploaded');
            res.end();
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data>"');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
```

### Step 3: Saving the Uploaded File

When a file is uploaded, it is placed in a temporary folder.

The path of this temporary folder can be found in the "files" object, passed as the second argument in the `parse()` method's callback function

To move this file to a folder of our choice, we must use the File System Module, and rename the file

Example:

```javascript
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/User_Name/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw error;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data>"');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
```
