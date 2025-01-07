var events = require('events');
var eventEmitter = new events.EventEmitter();

// Cria um manipulador de eventos
var myEventHandler = function () {
  console.log('I hear a scream!');
}

// Atribui o manipulador ao evento de 'scream'
eventEmitter.on('scream', myEventHandler);

// Causa o evento 'scream'
eventEmitter.emit('scream');