const EventA = require('events');

class MyEmitter extends EventA{}

const myEMi = new MyEmitter();
myEMi.on('test',()=>{
	console.log('aaaaa')
});
myEMi.emit('test');