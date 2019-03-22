
const fs = require('fs');
const util = require('util');
const filePath = './data.json'

const add =()=>{
	fs.readFile(filePath,(err,data)=>{
		if(err){

		}else{
			//console.log(data);
			let arr = JSON.parse(data);
		}
	})
}


//1.获取原有数据

//2.添加数据到原有数据中

//3.保存