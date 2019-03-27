const http = require('http');

const server = http.createServer((req,res)=>{
	//req = request;
	//res = response;
	res.setHeader('Content-Type','text/html;charset=utf-8');
	res.write('<h1>hello 你好</h1>');
	res.end('kuazhu');

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})


