
const mongoose = require('mongoose');

//1.定义Schema
const BlogSchema = new mongoose.Schema({
	title:{
		type:String,
		default:''
	},
	content:{
		type:String,
		default:''
	},
	author:{
		type:mongoose.Schema.Types.ObjectId,
		// type:String,
	},
});

//2.生成模型Model
//2.1 mongoose.model的第一个参数是指定集合的名称，mongoose会自动变为复数
//2.2 mongoose.model的第二个参数是指定Schema
const BlogModel = mongoose.model('blog', BlogSchema);

//3 导出模型Model
module.exports = BlogModel;


