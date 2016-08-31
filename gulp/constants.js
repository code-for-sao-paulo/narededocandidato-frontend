var settings = require('./settings');
var gulp = require('gulp');
var constant = require('gulp-ng-constant');

function constants() {
  return constant({
    name: 'im.im-front.config',
    constants: settings.constants,
    stream: true
  })
  .pipe(gulp.dest(settings.paths.dist.root));
}

module.exports = constants;