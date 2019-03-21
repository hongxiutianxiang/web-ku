


const EventA = require('events');

class MyEmitter extends EventA{}

const myEv = new MyEmitter();

/*
myEv.on('test',(arg1,arg2)=>{
	console.log('aaaaa');
	console.log(arg1,arg2)
});
myEv.emit('test','hello','kuazhu');
*/

const args = ['hello','hi']
myEv.on('test',(arg1,arg2)=>{
	console.log('aaaaa');
	console.log(arg1,arg2)
});
myEv.emit('test',...args);




