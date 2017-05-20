
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/lsyblog');
//定义用户集合的骨架模型
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
let User = mongoose.model('User',UserSchema);
module.exports.User = User;