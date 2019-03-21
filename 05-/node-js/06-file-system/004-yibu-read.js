const fs = require('fs');

/**/
//1.打开
	fs.open('01.txt','a',(err,fd)=>{
		if(err){
			console.log('err:::')
		}else{//2.读
			let buf = Buffer
			fs.read()
			if(err){
	
			}else{
	
			}
		}

		//3.关闭退出

		fs.close()
	})


/*
fs.readFile('./01.txt',{'flag':'r'},(err,data)=>{
	if(err){
		console.log('err:::')
	}else{
		console.log(data)
	}
})
*/



