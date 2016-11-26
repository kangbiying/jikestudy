var express = require('express');
var orm = require('orm');
var router = express.Router();

module.exports = function(router){
	router.use(orm.express("mysql://root:@localhost/info",{
	    define:function(db,models,next){
	      models.Recommend=db.define("recommend",{
	        newsid:{
	          type:'serial',
	          key:true
	        },
	        newstype:Number,
	        newstitle:String,
	        newsimg: String,
	        newscontent:String,
	        addtime:Date
	      });
	      next();
	    }
	}));

}
