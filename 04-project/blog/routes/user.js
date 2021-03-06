const express = require('express');
const UserModel = require('../models/user.js')
const hmac = require('../util/hmac.js')

const router = express.Router();

//处理注册
router.post("/register",(req,res)=>{
	const {username,password} = req.body;
	const result = {
		status:0,//成功
		message:''
	}
	//1. 检查是否已经注册过
	UserModel.findOne({username})
	.then(user=>{
		if(user){//用户已存在
			result.status = 10;
			result.message = '用户已存在';
			res.json(result);
		}else{//插入新用户
			UserModel.insertMany({
				username,
				password:hmac(password),
				// isAdmin:true
			})
			.then(user=>{
				res.json(result)
			})
			.catch(err=>{
				throw err;
			})
		}
	})
	.catch(err=>{//不是查询不到的err
		result.status = 10;
		result.message = '服务器端错误，请稍后再试';
		res.json(result);
	})
	// res.json({status:0})
})

//处理登陆
router.post("/login",(req,res)=>{
	const {username,password} = req.body;
	const result = {
		status:0,//成功
		message:''
	}
	UserModel.findOne({username,password:hmac(password)},'-password -__v')
	.then(user=>{
		if(user){//登陆成功
			result.data = user;
			// console.log('确定',user)
			// req.cookies.set('userInfo',JSON.stringify(user))
			req.session.userInfo = user;

			res.json(result);
			
		}else{//插入新用户
			result.status = 10;
			result.message = '用户名和密码不正确'
			res.json(result)
		}
	})
	.catch(err=>{//不是查询不到的err
		result.status = 10;
		result.message = '服务器端错误，请稍后再试';
		res.json(result);
	})
	// res.json({status:0})
})

//处理退出
router.get('/logout',(req,res)=>{
	const result = {
		status:0,//成功
		message:''
	}
	// req.cookies.set('userInfo',null)
	req.session.destroy()
	res.json(result)
})

module.exports = router