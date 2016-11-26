var express = require('express');
var router = express.Router();
var orm=require('orm');
var dbs = require('../dbs/dbs')(router);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: '后台添加新闻' });
});

router.get("/add",function(req,res,next){
  req.models.Recommend.create({
  	newstype:req.query.newstype,
    newstitle:req.query.newstitle,
    newsimg:req.query.newsimg,
    newscontent:req.query.newscontent,
    addtime:req.query.addtime
  },function(err, recommend){
       console.log(recommend);
      res.json(recommend);
  });
});
module.exports = router;

