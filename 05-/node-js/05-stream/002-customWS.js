

//自定义可写流
const {Writeable} = require('stream');
/*
const wr = new Writeable();
wr.write('hello')    // Writeable is not a constructor
*/

class MyWriter extends Writeable{
	_write(){
		console.log('hello')
	}
}

const awriter = new MyWriter();
