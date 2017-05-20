/**
 * Created by Administrator on 2017/5/20.
 */
let express =require('express')
let app = express();
let router = express.Router();
router.get('/',function (req,res) {
    res.end('首页')
});
module.exports = router;