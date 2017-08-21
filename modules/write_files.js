// fs.writeFile() replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
};
