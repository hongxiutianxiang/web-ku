const EventA = require('events');

class MyEmitter extends EventA{}

const myEMi = new MyEmitter();
myEMi.on('test',()=>{
	console.log('aaaaa')
});
myEMi.emit('test');

myEMi.addlistener('test2',()=>{
	console.log('bbb')
});
myEMi.emit('test2')