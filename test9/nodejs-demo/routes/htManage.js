var express = require('express');
var router = express.Router();
var orm=require('orm');
var dbs = require('../dbs/dbs')(router);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('htManage', { title: '后台新闻管理' });
});

router.get("/data",function(req,res,next){
  req.models.Recommend.find({newstype:req.query.newsType},function(err, recommend){
      // console.log(req);
      res.json(recommend);
  });
});
// 修改
router.get("/update",function(req,res,next){
  req.models.Recommend.find({newsid:req.query.numid}).each(function (person) {
      person.save({ 
        newstitle :req.query.newstitle,
        newsimg : req.query.newsimg,
        newscontent :req.query.newscontent,
      }, function (err) {
        if (err) throw err;
        //console.log(person);
        res.json(person);
      });
  });
});

// 删除
router.get("/delete",function(req,res,next){
   req.models.Recommend.find({newsid:req.query.numid}).remove(function(err,recommend) {
       res.json(recommend);
  });
});
module.exports = router;

