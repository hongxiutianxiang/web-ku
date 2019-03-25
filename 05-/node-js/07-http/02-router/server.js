const http = require('http');

const server = http.createServer((req,res)=>{
	res.setHeader('Content-Type','text/html;charset=utf-8');
	res.end('<h1>hello 你好</h1>');

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})


