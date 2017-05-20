/**
 * Created by Administrator on 2017/5/20.
 */
let express =require('express')
let app = express();
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article')
app.use('/',index);
app.use('/user',user); //请求路径一user开头  使用user中间件
app.use('/article',article);
app.listen(8090);
