var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

// shows that the program blocks until it reads the file and only then it proceeds to end of the program
