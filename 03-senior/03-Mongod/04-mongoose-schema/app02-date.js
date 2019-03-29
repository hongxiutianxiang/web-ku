
const mongoose = require('mongoose');
const moment = require('moment')

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

	UserModel.findById('5c9dd6312132642c5843a397',(err,user)=>{
		if(err){
			console.log('findById err',err);
		}else{
			//console.log(user.createAt);
			//1.用Date类
			// const date = new Date(user.createAt)
			// console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+'-'+date.getMinutes()+'-'+date.getSeconds())
			//2.用Moment
			console.log(moment(user.createAt).format('YYYY-MM-DD HH:mm:ss'))
		}
	})
});




















