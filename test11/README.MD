# 任务 11: 掌握CSS在工程中的变化(高级进阶)
css前处理器是动态的样式表语言，通过简洁明了的语法定义，可以像编程一样书写CSS。
## 任务列表
### 1.利用less或者sass改善极客学院首页CSS
利用less或者sass改善极客学院首页作业的CSS
1.编写Gulp或FIS脚本对Sass或者Less进行编译。
2.符合性能优化标准进行压缩合并以及充分利用Less或Sass优势少写代码。
可查看官方API进行更多的运用。
### 2.利用less或sass编写公交站牌
利用less或sass编写代码制作出一个公交站牌的效果。

## 个人总结
1.本关知识点：
(1)面向对象的css:OO css
(2)css预处理器  Sass、LESS、Stylus 是目前最主流的 CSS 预处理器 
(3)css后处理器  广义上的 CSS 预处理器  最近比较火的 Autoprefixer 
(4)css 分层    使用CSS有语义化的命名约定和CSS层的分离
				BEM、SUIT、OOCSS、SMACSS、ITCSS
2.less/sass
安装 $ npm install -g less
sass 基于ruby 所以装sass之前先确认装了ruby
http://www.w3cplus.com/sassguide/
3.gulp-postcss
4.autoprefixer

## 作业参考
新建配置package.json文件  
方法 命令提示符执行npm init或者cnpm init
1.
(1)全局安装gulp是为了执行gulp任务，本地安装gulp则是为了调用gulp插件的功能。
gulp详细入门教程 
	http://www.ydcss.com/archives/18
gulp教程之gulp-less
	http://www.ydcss.com/archives/34
运行 gulp default/自定义的任务名称
(2)存在问题以及解决
gulp-imagemin 在压缩gif 会报错，jpg本身压缩过，所以一般只针对png,ico
压缩后的目标文件应该在另一个文件夹下 和本身文件夹不同
2.公交站牌
参考 西安公交站牌图片