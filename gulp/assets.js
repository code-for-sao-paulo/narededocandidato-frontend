var settings = require('./settings');
var path = require('path');
var gulp = require('gulp');

function assets() {
  return gulp
    .src(settings.paths.app.assets)
    .pipe(gulp.dest(settings.paths.dist.assets));
}

module.exports = assets;