const express = require('express')
const swig = require('swig')
const mongoose = require('mongoose')
const bodyParse = require('body-parser')

const app = express()
const port = 3000


//1.连接数据库服务
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (err)=>{
    console.log('connection error:')
    throw err;
});

db.once('open', ()=>{
    console.log('connection successfully');
});

app.use(express.static('public'))

//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
})
//1.配置应用模板
app.engine('html', swig.renderFile);
//2.配置模板的存放目录
app.set('views', './views')
//3.注册模板引擎
app.set('view engine', 'html')

//post/put请求处理中间件
app.use(bodyParse.urlencoded({extend: false}))
app.use(bodyParse.json())

app.use('/',require('./routes/index.js'))

app.use('/user',require('./routes/user.js'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))