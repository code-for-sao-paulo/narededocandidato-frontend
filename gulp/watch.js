var gulp = require('gulp');
var css = require('./css');
var html = require('./html');
var scripts = require('./scripts');
var settings = require('./settings');

function watch() {
  gulp.watch(settings.files.html.index, { interval: 1000, mode: 'poll' }, html);
  gulp.watch(settings.files.html.files, { interval: 1000, mode: 'poll' }, html);
  gulp.watch(settings.files.css, { interval: 1000, mode: 'poll' }, css);
  gulp.watch(settings.files.scripts, { interval: 1000, mode: 'poll' }, scripts);
}

module.exports = watch;