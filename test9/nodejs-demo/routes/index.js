var express = require('express');
var router = express.Router();
var orm=require('orm');
var dbs = require('../dbs/dbs')(router);

/* GET home page. */
// inex
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express百度新闻' });
});


// 获取新闻
router.get("/data",function(req,res,next){
  req.models.Recommend.find({newstype:req.query.newsType},function(err, recommend){
      // console.log(req);
      res.json(recommend);
  });
});
module.exports = router;
