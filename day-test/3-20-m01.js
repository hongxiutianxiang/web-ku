const str = 'hello world';
const fn = fn()=>{
	console.log(str)
}
const obj = {
	name:'Tom',
	age:18
}

module.exports.str = str;
module.exports.fn = fn;
module.exports.obj = obj;