const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mime = require('./mime.json');

const server = http.createServer((req,res)=>{
	console.log('url:::',req.url);

	//约定：如果请求的是目录，则返回目录下面的index.html页面；

	let reqUrl = url.parse(req.url,true);
	// console.log(reqUrl);
	let pathname = reqUrl.pathname;

	if(pathname.lastIndexOf('.') == -1){//文件目录
		pathname = pathname + '/index.html';
		// console.log(pathname)// //index.html
	}

	let filePath = path.normalize(__dirname+ /static/ + pathname);
	// console.log(filePath);//D:\web-ku\05-senior\02-node-js\07-http\06-blog\static\index.html
	let extname = path.extname(filePath);
	console.log(extname);

	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.setHeader('Content-Type','text/html;charset=utf-8');
			res.end('<h1>出错了aa</h1>');
		}else{
			res.setHeader('Content-Type',mime[extname]+';charset=utf-8');
			res.end(data);			
		}
	})



});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})


