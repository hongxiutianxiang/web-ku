
const mongoose = require('mongoose');

//1.定义Schema
const UserSchema = new mongoose.Schema({
	name:{
		type:String,
		default:''
	},
	age:{
		type:Number,
		default:0
	},
	major:{
		type:String,
		enum:["math","sport","art","music"],
		default:"art"
	},
	locked:{
		type:Boolean,
		default:false
	},
	createAt:{
		type:Date,
		default:Date.now
	},
	friend:{
		type:Array
	}
});

//2.生成模型Model
//2.1 mongoose.model的第一个参数是指定集合的名称，mongoose会自动变为复数
//2.2 mongoose.model的第二个参数是指定Schema
const UserModel = mongoose.model('User', UserSchema);

//3 导出模型Model
module.exports = UserModel;


