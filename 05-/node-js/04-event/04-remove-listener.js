
const EventA = require('events');

class MyEmitter extends EventA{}

const myEv = new MyEmitter();


const args = ['hello','hi']

const fn1 = (arg1,arg2)=>{
	console.log('aaaaa');
	console.log(arg1,arg2)
};
myEv.on('test',fn1);//????????????????????????????????()

myEv.off('test',fn1); //移除   //10版本才有
myEv.removeListener('test',fn1);
console.log(myEv.off === myEv.removeListener) //true

myEv.emit('test',...args);