

//自定义可写流
const {Writable} = require('stream');
/*
const wr = new Writeable();
wr.write('hello')    // Writeable is not a constructor
*/

class MyWriter extends Writable{
	_write(chunk, encoding, callback){
		console.log(chunk);   //<Buffer 68 65 6c 6c 6f>
		console.log(encoding);
		callback && callback();
	}
}

const awriter = new MyWriter();

awriter.on('finish',()=>{
	console.log('over')
})

awriter.write('hello','utf-8',()=>{
	console.log('hi')
});

awriter.end();



