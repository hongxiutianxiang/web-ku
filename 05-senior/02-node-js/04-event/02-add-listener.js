const EventA = require('events');

class MyEmitter extends EventA{}

const myEMi = new MyEmitter();
// myEMi.on('test',()=>{
// 	console.log('aaaaa')
// });
// myEMi.emit('test');

// myEMi.addListener('test2',()=>{
// 	console.log('bbb')
// });
// myEMi.emit('test2')

// console.log(myEMi.on === myEMi.addListener)  //true

myEMi.setMaxListeners(11);
myEMi.on('test',()=>{
	console.log(1)
});
myEMi.on('test',()=>{
	console.log(2)
});
myEMi.on('test',()=>{
	console.log(3)
});
myEMi.on('test',()=>{
	console.log(4)
});
myEMi.on('test',()=>{
	console.log(5)
});
myEMi.on('test',()=>{
	console.log(6)
});
myEMi.on('test',()=>{
	console.log(7)
});
myEMi.on('test',()=>{
	console.log(8)
});
myEMi.on('test',()=>{
	console.log(9)
});
myEMi.on('test',()=>{
	console.log(10)
});
myEMi.on('test',()=>{
	console.log(11)
});
myEMi.emit('test');