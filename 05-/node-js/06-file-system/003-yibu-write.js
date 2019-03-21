const fs = require('fs');

/*
//1.打开
	fs.open('01.txt','a',(err,fd)=>{
		if(err){
			
		}else{//2.写

		}

		//3.关闭退出

		fs.close()
	})
*/


fs.writeFile('./01.txt','kuazhu',{'flag':'a'},(err)=>{
	if(err){
		console.log('err:::')
	}
})



