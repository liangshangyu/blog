/**
 * Created by Administrator on 2017/5/20.
 */
let express = require('express');
let router = express.Router();
router.get('/add',function (req,res) {
    res.send('添加文章')
})
module.exports = router
