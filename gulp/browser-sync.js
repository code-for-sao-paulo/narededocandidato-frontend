var settings = require('./settings');
var browserSync = require('browser-sync');

function sync() {
  return browserSync({
    server: {
      baseDir: settings.paths.dist.root
    },
    port: settings.server.port,
    notify: false,
    open: false,
    ui: false
  });
}

module.exports = sync;