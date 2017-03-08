/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

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

// Minify and rename css
gulp.task('minify-css', function() {
  return gulp.src(['css/*.css', '!css/*.min.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'));
});

// create a default task and just log a message
gulp.task('default', ['minify-css', 'browser-sync'], function() {
	gulp.watch(['css/*.css'], ['minify-css']);
	gulp.watch(['css/*.css', '*.html', 'js/*.js'], ['live-reload']);
});