const EventA = require('events');

class MyEmitter extends EventA{}

const myEv = new MyEmitter();

myEv.on('newListener',(eventName,cb)=>{   //当有新的监听被添加时触发
	console.log('aaaaa')    
	cb();            //回调函数接受两个参数分别是添加的事件名称和函数的
});
// myEv.emit('test');

myEv.on('test',()=>{
	console.log('bbbbb')
});
myEv.emit('test');