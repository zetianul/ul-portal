var express = require('express');
var router = express.Router();
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
  destination:'public/upload/',
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload = multer({storage:storage}).fields([
  {name:'file',maxCount:1}
])
/* GET home page. */
router.get('/',function (req,res,next) {
    res.render('index',{title:'!'})
})

router.get('/vue', function(req, res, next) {
  // res.render('index', { title: 'my website' });
  res.sendFile(path.join(__dirname, '../public/vue.html'));
});

router.get('/wechat',function(req,res,next){
  res.sendFile(path.join(__dirname,'../public/wechat.html'))
})

router.post('/upload',upload,function(req,res,next){
  console.log(req.body.token)
  res.send(req.files)
})
module.exports = router;
