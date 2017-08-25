# Learning NodeJS Events

## What are Events?

We can create events in NodeJS that are binded to certain actions. When the event is 'emitted' the action that is binded to it will be executed.

## Events Module

NodeJS has a built-in module for events called "Events" where we can build our own events.

```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();
```

## Event Emitter

The EventEmitter allows us to bind handlers to certain objects that will trigger the actions of the object that is bound.

Example:

```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log('I hear a scream!');
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');
```

The myEventHandler is a function that will print 'I hear a scream' to the console whenever it is called. We bind this to the 'scream' handler using eventEmitter. Now whenver the 'scream' handler is 'emitted' the myEventHandler will trigger.

## Credit

All of these examples can be found [here](https://www.w3schools.com/nodejs/nodejs_events.asp).
