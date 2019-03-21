// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('test',()=>{
// 	console.log('aaaa')
// })
// emitter.emit('test');




const EventA = require('events');

class MyEmitter extends EventA{}

const myEv = new MyEmitter();
myEv.on('test',()=>{
	console.log('aaaaa')
});
myEv.emit('test');