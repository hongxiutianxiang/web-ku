
const mongoose = require('mongoose');

//1.连接数据库服务
mongoose.connect('mongodb://localhost/hongxiu', {useNewUrlParser: true});

const db = mongoose.connection;
	db.on('error', (err)=>{
		console.log('connection error:')
		throw err;
	});
	db.once('open', ()=>{
	 console.log('connection successfully');

	 //2.定义Schema
	 const UserSchema = new mongoose.Schema({
	  	name: String,
	  	age:Number,
	  	major:String
	 });
	 //3.生成模型Model
	 //3.1 mongoose.model的第一个参数是指定集合的名称，mongoose会自动变为复数
	 //3.2 mongoose.model的第二个参数是指定Schema
	 const UserModel = mongoose.model('User', UserSchema);

	 //4.用模型操作数据(CRUD)

	 //4.1 插入数据
	 /*
	 const user = new UserModel({name:"Tom",age:19,major:"computer"});
	 user.save((err,doc)=>{
	 	if(err){
	 		console.log('save user err::',err);
	 	}else{
	 		console.log(doc);
	 	}
	 })
	 */
	 //4.2 查找
	 UserModel.find({},(err,docs)=>{
	 	if(err){
	 		console.log('find user err::',err);
	 	}else{
	 		console.log(docs);
	 	}
	 })


});




















