-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 08 月 30 日 07:17
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `info`
--
CREATE DATABASE IF NOT EXISTS `info` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `info`;

-- --------------------------------------------------------

--
-- 表的结构 `recommend`
--

CREATE TABLE IF NOT EXISTS `recommend` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstype` int(11) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='新闻推荐表' AUTO_INCREMENT=35 ;

--
-- 转存表中的数据 `recommend`
--

INSERT INTO `recommend` (`newsid`, `newstype`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(10, 0, '奥运首日，社交平台爆发洪荒之力', 'http://cdn.ur.qq.com/uploadImages/2016-08-29/20160829150344.PNG', '奥运首日，社交平台爆发洪荒之力', '2016-08-03 00:00:00'),
(11, 1, '2016用户体验行业调查报告', 'http://cdn.ur.qq.com/uploadImages/2016-07-07/20160707111329.JPG', '2016用户体验行业调查报告', '2016-08-06 00:00:00'),
(26, 0, '看到这些问卷，请注意绕行', 'http://cdn.ur.qq.com/uploadImages/2016-08-29/20160829151148.JPG', '这两天有卷粉说参与了「填写即送**礼物」活动，为什么还没有收到礼物，是不是真的。经查证，不法分子利用腾讯问卷信息收集的便利性，通过有奖问卷为诱饵反复传播，诱导分享来试图窃取用户信息。而且这种类型的问卷...', '2016-08-08 00:00:00'),
(27, 2, '设计客观问题的七个秘籍', 'http://cdn.ur.qq.com/uploadImages/2016-08-29/20160829153940.JPG', '前言如何设计问卷的问题？ 在开始设计一份调查问卷时，可能会有一个阶段。设计者对于应该询问哪些信息，应该搜集哪些信息，自己设计的问题是否能覆盖所有需要的信息，往往是茫然的。本宝宝心里苦，本宝宝不说所以，...', '2016-08-24 00:00:00'),
(28, 1, '为何出国旅游不再遥远？', 'http://cdn.ur.qq.com/uploadImages/2016-05-13/20160513182423.JPG', '中国已逐渐成为境外旅游消费的主力军。近年来，关于中国大妈横扫异国各大卖场的新闻也随处可见，中国出境旅游人群的不断扩大，让世界惊叹。那么，现在出境旅游的是哪些人群？他们有哪些旅游偏好？...', '2016-08-12 00:00:00'),
(29, 0, '打车软件用户大揭秘', 'http://cdn.ur.qq.com/uploadImages/2016-05-12/20160512112554.JPG', '打车软件用户大揭秘打车软件用户大揭秘打车软件用户大揭秘打车软件用户大揭秘打车软件用户大揭秘', '2016-08-21 00:00:00'),
(30, 2, '在线旅游正在如何快速颠覆传统格局', 'http://cdn.ur.qq.com/uploadImages/2016-03-15/20160315183230.JPG', '腾讯CDC用户研究中心通过网络问卷调研和定性用户访谈，以全方位的数据为您揭秘旅游信息攻略查找、机票车票预订、酒店预订、景点门票购买四个贯穿旅游全程的重点环节正在如何被互联网颠覆。...', '2016-08-14 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
