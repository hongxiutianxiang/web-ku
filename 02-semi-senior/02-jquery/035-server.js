var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res){
	var urlStr = req.url; 
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}
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
		}else{
			res.statusCode = 404;
			res.end('not found');
		}
	});
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