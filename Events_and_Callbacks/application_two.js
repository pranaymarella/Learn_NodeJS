// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler
var connectHandler = function connected() {
    console.log('connection successful');

    // fire the data_recieved event
    eventEmitter.emit('data_received');
}

// bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received successfully');
});

// fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");
