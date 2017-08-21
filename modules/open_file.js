// fs.open() method takes a 'flag' as the second argument
// if the flag is "w" for "writing", the specified file is opened for writing, if the file does not exist, then an empty file is created
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved');
});
