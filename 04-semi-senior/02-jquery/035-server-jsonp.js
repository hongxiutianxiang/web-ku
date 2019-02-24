

var http = require('http');
var fs = require('fs');
var url = require('url');

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
		//参数处理
		if(urlStr.search(/\?/)!=-1){
			var parm = url.parse(urlStr,true).query;
			//根据数据做处理
			var json = JSON.stringify(parm);
			res.end(json);
		}
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
  console.log("Server running at http://127.0.0.1:3001/");
});

