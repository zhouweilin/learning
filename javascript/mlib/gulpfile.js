var gulp = require('gulp'),
    bs = require('browser-sync').create();
gulp.task('bs', function(){
	bs.init({
		server: './app'
	});
});

gulp.task('default', ['bs'], function(){
	gulp.watch(['./app/index.html', './app/js/mlib.js'], bs.reload);
});
