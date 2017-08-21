// File System Module has methods for creating files
// methods are: fs.appendFile(), fs.open(), fs.writeFile()
var fs = require('fs');

// fs.appendFile() appends specified content to a file, if the file doesn't exist then the file will be created
fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});
