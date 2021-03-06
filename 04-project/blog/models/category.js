
const mongoose = require('mongoose');

//1.定义Schema
const CategorySchema = new mongoose.Schema({
	name:{
		type:String
	},
	order:{
		type:Number,
		default:0
	},
});

//2.生成模型Model
const CategoryModel = mongoose.model('Category', CategorySchema);

//3 导出模型Model
module.exports = CategoryModel;


