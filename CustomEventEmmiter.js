// / Build your custom Event Emitter class

class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(event, listener) {
      (this.events[event] || (this.events[event] = [])).push(listener);
    }
  
    off(event, listenerToRemove) {
      this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
    }
  
    emit(event, ...args) {
      (this.events[event] || []).forEach(listener => listener(...args));
    }
  }
  
  // Usage example
  const emitter = new EventEmitter();
  const listener = (msg) => console.log(`Received: ${msg}`);
  emitter.on('message', listener);
  emitter.emit('message', 'Hello World'); // Received: Hello World
  emitter.off('message', listener);
  