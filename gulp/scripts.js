var settings = require('./settings');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gulp = require('gulp');
var minify = require('gulp-minify');
var path = require('path');

function scripts() {
  var items = settings.files.scripts;
  
  items.forEach(function (item) {
    var filePath = item;
    
    if (typeof filePath === 'string') {
        filePath = [filePath];
    }
    
    filePath.push(settings.files.constants);
    
    gulp
      .src(filePath)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write())
      .pipe(minify())
      .pipe(plumber.stop())
      .pipe(gulp.dest(settings.paths.dist.scripts));
  });
}

module.exports = scripts;