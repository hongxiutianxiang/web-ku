const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mime = require('./mime.json');

const server = http.createServer((req,res)=>{
	console.log('url:::',req.url);

	let reqUrl = url.parse(req.url,true);
	// console.log(reqUrl);
	let pathname = reqUrl.pathname;
	// console.log('pathname:::',reqUrl);
	//约定：
	//1.请求以/static/开始的路径是静态资源
	//2.对于路由请求的约定:  /Controller/action/arg1/arg2...
	//						/wish/add
	//						/wish/del/12365
	//             			/wish/index

	if(pathname.startsWith('/static/')){//静态处理资源
		let filePath = path.normalize(__dirname + pathname);
		// console.log(filePath);//D:\web-ku\05-senior\02-node-js\07-http\06-blog\static\index.html
		let extname = path.extname(filePath);
		// console.log(extname);

		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end('<h1>出错了aa</h1>');
			}else{
				res.setHeader('Content-Type',mime[extname]+';charset=utf-8');
				res.end(data);			
			}
		});		
	}else{//路由处理
		let paths = pathname.split('/');
		console.log('paths',paths)
		let controller = path[1] || 'Wish';
		let action = paths[2] || 'index';//add  del
		let args = paths.slice(3);
		try{
			let mode = require('./Controller/' + controller);
			mode[action] && mode[action].apply(null,[req,res].concat(args));//????????????????
		}
		catch(err){
			console.log('err:::',err);
			res.setHeader('Content-Type','text/html;charset=utf-8');
			res.end('<h1>出错了aa</h1>');
		}
		
	}
});

server.listen(3001,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3001')
})


