var gulp = require('gulp');
var runSequence = require('run-sequence');
var clean = require('./gulp/clean');
var assets = require('./gulp/assets');
var externals = require('./gulp/externals');
var scripts = require('./gulp/scripts');
var html = require('./gulp/html');
var css = require('./gulp/css');
var browserSync = require('./gulp/browser-sync');
var watch = require('./gulp/watch');
var constants = require('./gulp/constants');

gulp.task('clean', clean);
gulp.task('assets', assets);
gulp.task('externals', externals);
gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('css', css);
gulp.task('browserSync', browserSync);
gulp.task('watch', watch);
gulp.task('constants', constants);

gulp.task('build', function (callback) {
  return runSequence(
    'assets',
    'externals',
    'html',
    'css',
    'constants',
    'scripts',
    'browserSync',
    callback
  );
});

gulp.task('dist', ['clean'], function () {
  return gulp.start('build');
});

gulp.task('dev', ['clean'], function (callback) {
  return runSequence(
    'assets',
    'externals',
    'html',
    'css',
    'constants',
    'scripts',
    'watch',
    'browserSync',
    callback
  );
});
