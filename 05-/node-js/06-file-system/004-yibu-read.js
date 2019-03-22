const fs = require('fs');

/**/
//1.打开
fs.open('01.txt','a',(err,fd)=>{
	if(err){
		console.log('open err:::')
	}else{
		//2.读
		let buf = Buffer.alloc(100);
		fs.read(fd,buf,0,100,0,(err)=>{
			if(err){
				console.log('read err..')
			}else{
				console.log(buf)
				console.log('read sucess...')
			}
		})
		//3.关闭退出
		fs.close(fd,(err)=>{
			if(err){
				console.log('close err...')
			}else{
				console.log('close sucess')
			}
		})
	}
})


/*
fs.readFile('./01.txt',{'flag':'r'},(err,data)=>{
	if(err){
		console.log('readFile err:::')
	}else{
		console.log(data)
	}
})
*/



