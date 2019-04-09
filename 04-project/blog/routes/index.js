const express = require('express')
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')

const router = express.Router()

async function getCommonData(req){
	const categoriesPromise = CategoryModel.find({},'name').sort({order:-1});
	const pageArticlesPromise = ArticleModel.getPaginationArticles(req);

	const categories = await categoriesPromise;
	const pageArticles = await pageArticlesPromise;

	return {
		categories,
		pageArticles
	}
}

router.get("/",(req,res)=>{
	/**/
	CategoryModel.find({},'name')
	.sort({order:-1})
	.then(categories=>{
		// console.log(categories)
		res.render('main/index',{
			userInfo:req.userInfo,
			categories
		})	
	})
	
	/*
	getCommonData(req)
	.then(data=>{
		const {categories,pageArticles} = data;
		res.render('main/index',{
			userInfo:req.userInfo,
			categories		
	})
	*/
})

module.exports = router