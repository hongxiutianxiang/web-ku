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

const readFile = util.promisify(fs.readFile);
async function callReadFile(){
	let data = await readFile('./01.txt',{flag:'r'});
	return data;
}
callReadFile()
.then(data=>{
	console.log(data)
})

