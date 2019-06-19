const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
const UserModel = require('../models/user.js')
const CommentModel = require('../models/comment.js')
const pagination = require('../util/pagination.js')
const hmac = require('../util/hmac.js')
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

//处理上传图片
router.post('/uploadImage',upload.single('upload'),(req,res)=>{
	const uploadedFilePath = '/uploads/'+req.file.filename
	res.json({
		uploaded:true,
		url:uploadedFilePath
	})
})

//处理评论管理
router.get('/comments',(req,res)=>{
	CommentModel.getPaginationComments(req)
	.then(data=>{
		res.render('admin/comment_list',{
			userInfo:req.userInfo,
			comments:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/comments'
		})			
	})
})


//删除评论
router.get("/comment/delete/:id",(req,res)=>{
	const { id } = req.params;
	// console.log(id);
	CommentModel.deleteOne({_id:id})
	.then(result=>{
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:"删除评论成功",
			url:'/admin/comments'
		})			
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:"删除评论失败，请稍后再试"
		})		
	})
})

//显示修改密码页面
router.get('/password',(req,res)=>{
	res.render('admin/password',{
		userInfo:req.userInfo,
	})
})

//修改密码

router.post('/password',(req,res)=>{
	const { password } = req.body;
	UserModel.updateOne({_id:req.userInfo._id},{password:hmac(password)})
	.then(result=>{
		req.session.destroy();
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:"更新密码成功,请重新登陆",
			url:'/'
		})
	})
})



module.exports = router;