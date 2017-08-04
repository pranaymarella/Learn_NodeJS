var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");

// shows that the program does not wait for the file reading
// instead proceeds to end output of "Program Ended"
// once the callback comes through then outputs the input.txt


// in case a program needs to use any data to be processed, it should be kept within the same block to make it sequential execution
