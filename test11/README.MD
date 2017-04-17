# 任务 11: 掌握CSS在工程中的变化(高级进阶)
css前处理器是动态的样式表语言，通过简洁明了的语法定义，可以像编程一样书写CSS。
## 任务列表
### 1.利用less或者sass改善极客学院首页CSS <br/>
利用less或者sass改善极客学院首页作业的CSS<br/>
1.编写Gulp或FIS脚本对Sass或者Less进行编译。<br/>
2.符合性能优化标准进行压缩合并以及充分利用Less或Sass优势少写代码。<br/>
可查看官方API进行更多的运用。<br/>
### 2.利用less或sass编写公交站牌<br/>
利用less或sass编写代码制作出一个公交站牌的效果。<br/>

## 个人总结
1.本关知识点：<br/>
(1)面向对象的css:OO css<br/>
(2)css预处理器  Sass、LESS、Stylus 是目前最主流的 CSS 预处理器 <br/>
(3)css后处理器  广义上的 CSS 预处理器  最近比较火的 Autoprefixer <br/>
(4)css 分层    使用CSS有语义化的命名约定和CSS层的分离<br/>
				BEM、SUIT、OOCSS、SMACSS、ITCSS<br/>
2.less/sass<br/>
安装 $ npm install -g less<br/>
sass 基于ruby 所以装sass之前先确认装了ruby<br/>
http://www.w3cplus.com/sassguide/<br/>
3.gulp-postcss<br/>
4.autoprefixer<br/>

## 作业参考
新建配置package.json文件  <br/>
方法 命令提示符执行npm init或者cnpm init<br/>
1.<br/>
(1)全局安装gulp是为了执行gulp任务，本地安装gulp则是为了调用gulp插件的功能。<br/>
gulp详细入门教程 <br/>
	http://www.ydcss.com/archives/18<br/>
gulp教程之gulp-less<br/>
	http://www.ydcss.com/archives/34<br/>
运行 gulp default/自定义的任务名称<br/>
(2)存在问题以及解决<br/>
gulp-imagemin 在压缩gif 会报错，jpg本身压缩过，所以一般只针对png,ico<br/>
压缩后的目标文件应该在另一个文件夹下 和本身文件夹不同<br/>
2.公交站牌<br/>
参考 西安公交站牌图片
