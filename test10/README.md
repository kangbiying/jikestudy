## 任务 10: 掌握前端工业化框架(高级进阶)<br/>
### 1.利用Gulp或者FIS重组百度首页<br/>
利用Gulp或者FIS重新组织你的百度首页样式和JS，然后达到工程化可编译状态。<br/>
1.安装Gulp或者FIS<br/>
2.按照框架要求编译百度首页达到性能最优状态。<br/>
3.通过本作业了解一种构建工具使用的基本原理即可（不同企业构建工具可能不一样，但原理基本一样），并学会独立查文档去学习新知识。<br/>
（视频中教学用的是FIS2，FIS3也可（两个不同版本）。<br/>
FIS2首页: http://fex-team.github.io/fis-site/index.html<br/>
FIS2快速入门: http://fex-team.github.io/fis-site/docs/beginning/getting-started.html <br/>
如果用FIS3做，可以参考下<br/>
FIS3首页：http://fis.baidu.com）<br/>
### 参考资料<br/>
Gulp官网：http://www.gulpjs.com.cn<br/>
FIS2首页:  http://fex-team.github.io/fis-site/index.html<br/>
FIS2快速入门: http://fex-team.github.io/fis-site/docs/beginning/getting-started.html <br/>
FIS3首页：http://fis.baidu.com<br/>
Yoman使用教程: http://yeoman.io/learning/index.html<br/>
### 个人总结<br/>
1.Grunt 的安装<br/>
安装	CLI                 npm install -g grunt-cli<br/>
如果未翻墙 安装cnpm <br/>
新建文件夹目录下  npm init 写入package.json<br/>
然后 npm install grunt --save-dev<br/>
2.FIS<br/>
fis server start 命令启动FIS的本地调试服务器功能对构建发布的项目进行预览调试<br/>
fis release： 编译并发布你的项目<br/>
命令执行后内置服务器会一直运行，可以通过 fis server stop 命令关闭内置服务器。<br/>
FIS默认的产出目构录可以通过 fis server open 打开<br/>
资源压缩  fis release --optimize<br/>
添加文件版本（md5戳） fis release --optimize --md5 <br/>
资源合并<br/>
fis release --optimize --md5 --pack<br/>
再次运行FIS构建项目<br/>
fis release -omp<br/>
html 压缩 https://github.com/babyzone2004/fis-optimizer-htmlmin<br/>
最新版本的作业需要安装插件 ，参考fis3官网<br/>
http://fis.baidu.com/fis3/docs/beginning/intro.html<br/>

fis3  使用fis3命令<br/>
fis-optimizer-htmlmin （html压缩）<br/>
npm install -g fis3-postpackager-loader （简单合并）<br/>

将所有的操作直接写入fis-conf.js然后使用cmd 命令发布即可看到效果 <br/>
