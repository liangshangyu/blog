/**
 * Created by Administrator on 2017/5/20.
 */
let express =require('express');
let path = require('path');
let bodyParse = require('body-parser')
let app = express();
//设置模板引擎
app.set('view engine','html');
//指定模板的存放根目录
app.set('views',path.resolve('views'));
//指定html类型的用ejs渲染
app.engine('html',require('ejs').__express);
app.use(bodyParse.urlencoded({extended:true}));
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
app.use(express.static(path.resolve('node_modules')));
app.use('/',index);
app.use('/user',user); //请求路径一user开头  使用user中间件
app.use('/article',article);
app.listen(8090);
