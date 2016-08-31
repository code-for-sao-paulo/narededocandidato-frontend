var settings = require('./settings');
var del = require('del');

function clean(done) {
  return del(settings.paths.dist.root, done);
}

module.exports = clean;