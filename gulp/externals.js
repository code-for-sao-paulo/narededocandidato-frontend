var settings = require('./settings');
var path = require('path');
var gulp = require('gulp');

function externals() {
  var items = settings.files.externals;
  
  items.forEach(function (item) {
    if (item.base) {
      gulp
        .src(item.path, { base: item.base })
        .pipe(gulp.dest(settings.paths.dist.externals));
    } else {
      gulp
        .src(item)
        .pipe(gulp.dest(settings.paths.dist.externals));
    }
  });
}

module.exports = externals;