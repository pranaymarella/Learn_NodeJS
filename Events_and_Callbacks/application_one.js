// import events module
var events = require('events');

// Create an event Emitter object
var eventEmitter = new events.EventEmitter();

// Bind event and event handler
eventEmitter.on('eventName', eventHandler);

// Fire an event
eventEmitter.emit('eventName');
