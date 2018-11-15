const gulp = require('gulp');
browserSync = require("browser-sync").create(); //浏览器实时刷新
var px2rem = require('gulp-px2rem-plugin');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var changed = require('gulp-changed');

// gulp.task('sass', function () {
//     return sass('./sass/main.scss')//编译文件
//     .on('error', sass.logError)//错误信息
//     .pipe(gulp.dest('./www/css'))////输出路径
//     .pipe(browserSync.reload({stream:true}));
// })

// gulp.task('dist',function(){
//    gulp.watch('./sass/*.scss',['sass']);// 监听的文件
// });
//

gulp.task('px2rem', function() {
  gulp.src('./sass/*.css')
    .pipe(changed('./css'))
    .pipe(px2rem({
      'width_design': 375,
      'valid_num': 6,
      'pieces': 10,
      'ignore_px': [1],
      'ignore_selector': []
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0'],
      cascade: true, //是否美化属性值 默认：true 像这样：
      //-webkit-transform: rotate(45deg);
      //        transform: rotate(45deg);
      remove: true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//压缩html
gulp.task('html', function() {
  gulp.src('./html/*.html')
    .pipe(browserSync.reload({
      stream: true
    }))
});

//启动热更新
gulp.task('server', ['html'], function() {
  gulp.start('px2rem');
  browserSync.init({
    port: 2017,
    server: {
      baseDir: ['./']
    }
  });
  gulp.watch('./sass/*.css', ['px2rem']); // 监听的文件
  gulp.watch('./html/*.html', ['html']);
});
