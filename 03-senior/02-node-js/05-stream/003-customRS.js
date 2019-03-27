const {Readable} = require('stream');

class MyReader extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){
		this.index++;
		if(this.index > 5){
			this.push(null);  //直到 readable.push() 返回 false 退出
		}else{
			let str = this.index+'';
			this.push(str);
		}
	}
}


const reader = new MyReader();
/*
reader.on('data',(chunk)=>{
	console.log(chunk.toString())
})

reader.on('end',()=>{
	console.log('over..')
})
*/
reader.pipe(process.stdout);

