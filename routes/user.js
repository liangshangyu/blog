/**
 * Created by Administrator on 2017/5/20.
 */
let express = require('express');
let {User} = require('../model');
let router = express.Router();
//用户注册
/*
* 功能实现：
* 1：绘制注册页面模板（username password email）
* 2：实现提交用户注册路由
*
* */
router.get('/signup',function (req,res) {
    res.render('user/signup',{title:'注册'});
});
router.post('/signup',function (req,res) {
    let user = req.body;//请求体对象 三个属性  username password email
    User.create(user,function (err,doc) {
        if(err){
            res.redirect('back')
        }else {
            res.redirect('/user/signin')
        }
    })
})
router.get('/signin',function (req,res) {
    res.render('user/signin',{title:'登录'});
});
router.post('/signin',function (req,res) {
    let user =req.body;
    User.findOne(user,function (err,doc) {
        if(err){
            res.redirect('back')
        }else {
          if(doc){
              res.redirect('/')
          }else {
              res.redirect('back')
          }
        }
    })
});
router.get('/signout',function (req,res) {
    res.send('登出')
});

module.exports = router