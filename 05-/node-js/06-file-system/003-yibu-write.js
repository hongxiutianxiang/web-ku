const fs = require('fs');

/*
//1.打开
	fs.open('01.txt','a',(err,fd)=>{
		if(err){
			console.log('open err:::')
		}else{
			//2.写入数据
			fs.write(fd,'aaaaa',(err)=>{
				if(err){
					console.log('write err...')
				}else{
					console.log('write sucess')
				}
				//3.关闭退出
				fs.close(fd,(err)=>{
					if(err){
						console.log('close err...')
					}else{
						console.log('close sucess')
					}
				})
			})
		}
	})
*/
console.log('do something')


fs.writeFile('./01.txt','kuazhu',{'flag':'w'},(err)=>{
	if(err){
		console.log('writeFile err...')
	}else{
		console.log('writeFile sucess')
	}
})



