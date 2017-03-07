/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('live-reload', function(done) {
	browserSync.reload();
    done();
});

// create a default task and just log a message
gulp.task('default', ['browser-sync'], function() {
  gulp.watch(['css/*.css', '*.html', 'js/*.js'], ['live-reload']);
});