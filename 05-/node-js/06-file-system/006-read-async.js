const fs = require('fs');
const util = require('util');

/*
fs.readFile('./01.txt',{'flag':'r'},(err,data)=>{
	if(err){
		console.log('err:::')
	}else{
		console.log(data)
	}
})
*/

const stat = util.promisityfy(fs.stat);
stat('./01.txt')
.then((stat)=>{
	console.log(stat)
})



