var gulp = require('gulp'),
	rename = require("gulp-rename"),
	//notify = require("gulp-notify"),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass');
  minifyCss = require('gulp-minify-css');
//server connect
gulp.task('connect', function() {
  connect.server({
    
    livereload: true
  });
});
//css
gulp.task('css', function() {
   gulp.src('scss/style.scss')
   		.pipe(sass.sync().on('error', sass.logError))
   		.pipe(autoprefixer('last 15 versions'))  		
   		.pipe(minifyCss({compatibility: 'ie8'}))
   		.pipe(rename('style.min.css'))
   		.pipe(gulp.dest('app/css'))
   		.pipe(connect.reload());
   		//.pipe(notify("NICE!"));
});
//html
gulp.task('html',function() {
	gulp.src('index.html')
	.pipe(connect.reload());
})

//watch
gulp.task('watch', function () {
    	gulp.watch('scss/**/*.scss', ['css'])
    	gulp.watch('index.html', ['html'])


})
//default
gulp.task('default', ['connect', 'css', 'html', 'watch']);