const express = require('express')
const UserModel = require('../models/user.js')
const pagination = require('../util/pagination.js')
const router = express.Router();


//权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登陆</h1>')
	}
})

//显示后台首页
router.get("/",(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})
//用户列表
router.get("/users",(req,res)=>{
	/*
	分页：
	约定：每一页显示 2 条	   limit(2)  limit = 2

	第1页  跳过 0 条  skip(0)
	第2页  跳过 2 条  skip(2)
	第3页  跳过 4 条  skip(4)

	第page页  跳过 (page-1)*limit 条  skip( (page-1)*limit )
	*/
/*
	let { page } = req.query;

	page = parseInt(page)
	
	//每页显示条数
	const limit = 2;

	if(isNaN(page)){
		page = 1
	}

	if(page == 0){
		page = 1
	}

	UserModel.countDocuments({})
	.then(count=>{
		//总页数 pages
		const pages = Math.ceil(count/limit)
		if(page>pages){
			page = pages
		}

		//生成页码数组
		const list = [];
		for(let i = 1;i<=pages;i++){
			list.push(i)
		}

		const skip = (page-1)*limit;

		UserModel.find({},'-password -__v')
		.skip(skip)
		.limit(limit)
		.then(users=>{
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users:users,
				page,
				list
			})	
		})

	})
*/
	const options = {
		page:req.query.page,
		model:UserModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:1}
	}
	pagination(options)
	.then(data=>{
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/users'
		})			
	})

})

module.exports = router