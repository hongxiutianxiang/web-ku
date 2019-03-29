
const mongoose = require('mongoose');

//构建数据用：
const getRandom = (min,max)=>{
	return Math.round(min + (max-min)*Math.random());
}

const names = ["Tom","Amy","Jack","Mike","Lucy","Ricky","Ben","Leo","peter"];
const majors = ["art","math","language","music","sport","English"]

const getName = ()=> names[getRandom(0,names.length-1)];
const getMajor = ()=> majors[getRandom(0,majors.length-1)];

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
	 const user = new UserModel({name:"Jack",age:19,major:"computer"});
	 user.save((err,doc)=>{
	 	if(err){
	 		console.log('save user err::',err);
	 	}else{
	 		console.log(doc);
	 	}
	 })
	 */
	 /*
	 UserModel.insertMany(	//返回值是promise
	 	[
	 		{name:getName(),age:getRandom(10,100),major:getMajor()},
	 		{name:getName(),age:getRandom(10,100),major:getMajor()},
	 	],

	 	(err,doc)=>{
		 	if(err){
		 		console.log('insertMany err::',err);
		 	}else{
		 		console.log(doc);
		 	}
	 	}
	 );
	 */
	 //  insertMany()	//返回值是promise
	  let promise1 = UserModel.insertMany(	
	 	[
	 		{name:getName(),age:getRandom(10,100),major:getMajor()},
	 		{name:getName(),age:getRandom(10,100),major:getMajor()},
	 		{name:getName(),age:getRandom(10,100),major:getMajor()},
	 		{name:getName(),age:getRandom(10,100),major:getMajor()},
	 		{name:getName(),age:getRandom(10,100),major:getMajor()},
	 	],
	  );
	  promise1
	  .then(docs=>{
	  	console.log('docs',docs)
	  })
	  .catch(err=>{
	  	console.log('insertMany err::',err);
	  })
});



