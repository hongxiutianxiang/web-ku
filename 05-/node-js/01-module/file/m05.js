const str = 'hello';

const fn = ()=>{
	console.log('fn....');
}

const obj = {
	name:'Tom',
	age:20
}
/*
console.log(exports);
console.log(module.exports);
console.log(exports == module.exports) //true
*/
/*
exports.str = str;
exports.fn = fn;
exports.obj = obj;
console.log(exports)
*/
/*
module.exports.str = str;
module.exports.fn = fn;
module.exports.obj = obj;
console.log('m05:::',module.exports)
*/
module.exports = {   //module.exports指向一个新对象
	str,
	fn,
	obj
}
module.exports.arr = [11,22,33,44];
console.log(exports == module.exports);

