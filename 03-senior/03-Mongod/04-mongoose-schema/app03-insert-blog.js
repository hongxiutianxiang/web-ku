
const mongoose = require('mongoose');

const BlogModel = require('./models/blog.js')

//1.连接数据库服务
mongoose.connect('mongodb://localhost/hongxiu', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error:')
	throw err;
});

db.once('open', ()=>{
	console.log('connection successfully');

	BlogModel.insertMany({
		title:"title...",
		content:"content...",
		author:"5c9dd6312132642c5843a397"
	},(err,docs)=>{
		if(err){
			console.log('insertMany err',err)
		}else{
			console.log(docs)
		}
	})
});




















