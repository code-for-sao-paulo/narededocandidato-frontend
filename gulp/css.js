var settings = require('./settings');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var reload = require('browser-sync').reload;
var path = require('path');

function html() {
  var items = settings.files.css;
  
  items.forEach(function (item) {
      gulp
        .src(item)
        .pipe(plumber())
        .pipe(gulp.dest(settings.paths.dist.css))
        .pipe(reload({
            stream: true
        }));
  });
}

module.exports = html;