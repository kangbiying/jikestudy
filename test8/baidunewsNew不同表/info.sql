-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-08-17 16:03:57
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `info`
--

-- --------------------------------------------------------

--
-- 表的结构 `baijia`
--

CREATE TABLE IF NOT EXISTS `baijia` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='百家' AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `baijia`
--

INSERT INTO `baijia` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(2, '产品经理线上问卷调查常见的坑', 'http://cdn.ur.qq.com/uploadImages/2016-07-26/20160726114403.PNG', '线上问卷调查是传统问卷调查的延伸和变种，已成为互联网公司比较通行的了解目标用户群、操作特征、评价反馈及痛点等的重要渠道，在线问卷调查可以给产品设计、运营和营销等提供很好的参考作用。', '2016-08-10 00:00:00'),
(3, '2016年中国人高考态度调查报告', 'http://cdn.ur.qq.com/uploadImages/2016-06-07/20160607095511.JPG', '一份来自4.3万亿用户的实际调研数据告诉你，2016年中国人的高考态度。一份来自4.3万亿用户的实际调研数据告诉你，2016年中国人的高考态度。', '2016-08-05 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `bendi`
--

CREATE TABLE IF NOT EXISTS `bendi` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='本地' AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `bendi`
--

INSERT INTO `bendi` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(1, '腾讯问卷，与“礼”有约——奥运竞猜赢好礼', 'http://cdn.ur.qq.com/uploadImages/2016-08-05/20160805164344.JPG', '奥运竞猜赢Q币、QQ公仔', '2016-08-14 00:00:00'),
(2, '电梯“吃人”惨剧频发，真的是偶然事故吗？', 'http://img1.gtimg.com/ninja/1/2016/05/ninja146432069268286.jpg', '《今日话题》栏目的伙伴腾讯新闻《事实说报告》先期在腾讯新闻客户端上进行了一项有关“公共安全”的数据调查。结果显示，广大网友对电梯、扶梯的安全性非常担忧，仅次于窨井盖。...', '2016-08-06 00:00:00'),
(3, '家门愿为谁打开？——O2O上门服务洞察', 'http://cdn.ur.qq.com/uploadImages/2016-05-12/20160512111348.JPG', '家门愿为谁打开？——O2O上门服务洞察家门愿为谁打开？——O2O上门服务洞察家门愿为谁打开？——O2O上门服务洞察', '2016-08-05 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `recommend`
--

CREATE TABLE IF NOT EXISTS `recommend` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='新闻推荐表' AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `recommend`
--

INSERT INTO `recommend` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(3, '发传单很Low?用好了照样能成“精准营销”的利器！', 'http://upload.hljtv.com/2012/0515/1337066692705.jpg', '传单的作用就是要在第一时间抓住潜在顾客，传达你最想让顾客知道的点，切忌大而全。这样说好像有一种“听过了很多道理，却仍然过不好这一生”的感觉，我们先看几个例子说话。', '2016-02-04'),
(5, '为何科技亿万富翁三分之一住在美国', 'http://cdn.ur.qq.com/uploadImages/2016-05-13/20160513182423.JPG', '为何科技亿万富翁三分之一住在美国加州？为何科技亿万富翁三分之一住在美国加州？为何科技亿万富翁三分之一住在美国加州？', '2016-05-01'),
(9, '正能量为湖北鼓劲 劲酒“美丽乡村故事”完美收官', 'http://upload.hljtv.com/2012/0515/1337045301379.jpg', '正能量为湖北鼓劲 劲酒“美丽乡村故事”完美收官正能量为湖北鼓劲 劲酒“美丽乡村故事”完美收官正能量为湖北鼓劲 劲酒“美丽乡村故事”完美收官', '2016-08-05'),
(10, '控制在线问卷数据质量的具体方法', 'http://cdn.ur.qq.com/uploadImages/2016-05-31/20160531112806.PNG', '数据质量决定了数据是否具有科学性，是否可以代表用户，是否给出准确的研究结论。因此我们要考虑对在线问卷的数据进行质量控制的具体的方法，保证问卷数据的质量。...', '2016-08-08');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
