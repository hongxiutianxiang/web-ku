//处理post请求

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	var urlStr = req.url; 
	console.log(req.method);
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}
	if(req.method == 'POST'){
		//res.end('post data ...');
		console.log('456')
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			res.end(body);
		})
	}else if(req.method == 'GET'){
		var filePath = './' + urlStr;
		fs.readFile(filePath,function(err,date){
		if(!err){
			res.end(date);
			console.log('123')
		}else{
			res.statusCode = 404;
			res.end('not found');
		}
		});
	}else{
		res.end('ok');
	}
	
});

server.listen(3000, '127.0.0.1', function(){
  console.log("Server running at http://127.0.0.1:3000/");
});


//局域网测试
/*
server.listen(3000, '10.196.21.58', function(){
  console.log("Server running at http://10.196.21.58:3000/");
});
*/