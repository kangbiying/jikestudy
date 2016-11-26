// // 设置图片合并的最小间隔
// fis.config.set('settings.spriter.csssprites.margin', 20);

// // 开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
// fis.config.set('modules.postpackager', 'simple');


// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

//简单合并
fis.match('::package', {
  postpackager: fis.plugin('loader')
});

fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});

fis.match('*.{less,css}', {
  packTo: '/static/aio.css'
});

fis.match('*.js', {
  packTo: '/static/aio.js'
});

fis.match('*.html', {
  optimizer: fis.plugin('htmlmin')
});
//html 压缩
fis.config.merge({
    modules: {
        optimizer: {
            html: "htmlmin"
        }
    },
    settings: {
        optimizer: {
            "htmlmin": {
                minifyJS: false
            }
        }
    }
})