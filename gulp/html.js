var settings = require('./settings');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var reload = require('browser-sync').reload;
var path = require('path');

function html() {
  gulp
    .src(settings.files.html.index)
    .pipe(plumber())
    .pipe(gulp.dest(settings.paths.dist.root))
    .pipe(reload({
      stream: true
    }));

  gulp
    .src(settings.files.html.files)
    .pipe(plumber())
    .pipe(gulp.dest(settings.paths.dist.html))
    .pipe(reload({
      stream: true
    }));
}

module.exports = html;