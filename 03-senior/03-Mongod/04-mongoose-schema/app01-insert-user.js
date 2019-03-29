
const mongoose = require('mongoose');

const UserModel = require('./models/user.js')

//1.连接数据库服务
mongoose.connect('mongodb://localhost/hongxiu', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error:')
	throw err;
});

db.once('open', ()=>{
	console.log('connection successfully');

	UserModel.insertMany({
		name:"Tom",
		age:18,
		major:"math"
	},(err,docs)=>{
		if(err){
			console.log('insertMany err',err)
		}else{
			console.log(docs)
		}
	})
});




















