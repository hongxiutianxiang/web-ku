const express = require('express')
const router = express.Router();

router.post("/register",(req,res)=>{
	res.json({status:0})
})

module.exports = router