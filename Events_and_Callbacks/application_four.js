// Import events module
var events = require('events');

// Create eventEmitter object
var eventEmitter = new events.EventEmitter();

// Listener #1
var listener1 = function listener1() {
    console.log('listner1 executed.');
}

// Listener #2
var listener2 = function listener2() {
    console.log('listner2 executed.');
}

// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listener2 function
eventEmitter.addListener('connection', listener2);

// Check count of all listeners of this eventEmitter
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "Listener(s) listening to connection event");

// Fire the Connection Event
eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now");

// Fire the connection event
eventEmitter.emit('connection');

// Check count of all listeners of this eventEmitter
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event.");

console.log("Program Ended.");
