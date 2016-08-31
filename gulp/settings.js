var path = require('path');
var fs = require('fs');
var dotenv = require('dotenv');

var settings = {};

dotenv.config({ silent: true });

settings.constants = {
  API_URL: process.env.API_URL || 'http://dev.api.narededocandidato.com.br:8081',
};

settings.server = {
  port: process.env.PORT || '8080'
};

settings.paths = {};
settings.paths.app = {};
settings.paths.app.root = 'app';

settings.paths.app.assets = path.join(settings.paths.app.root, 'assets');
settings.paths.app.externals = path.join(settings.paths.app.root, 'externals');
settings.paths.app.scripts = path.join(settings.paths.app.root, 'scripts');
settings.paths.app.html = path.join(settings.paths.app.root, 'views');
settings.paths.app.css = path.join(settings.paths.app.root, 'css');

settings.paths.app.assets = [
    path.join(settings.paths.app.assets, '*')
];

settings.paths.dist = {};
settings.paths.dist.root = 'dist';
settings.paths.dist.assets = path.join(settings.paths.dist.root, 'assets');
settings.paths.dist.externals = path.join(settings.paths.dist.root, 'externals');
settings.paths.dist.scripts = path.join(settings.paths.dist.root, 'scripts');
settings.paths.dist.css = path.join(settings.paths.dist.root, 'css');
settings.paths.dist.html = path.join(settings.paths.dist.root, 'views');

settings.files = {};

settings.files.externals = [
    { base: settings.paths.app.externals, path: path.join(settings.paths.app.externals, 'dashgum/**/*') },
    path.join(settings.paths.app.root, '../bower_components/angular/angular.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-translate/angular-translate.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-translate-loader-partial/angular-translate-loader-partial.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-base64-upload/dist/angular-base64-upload.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-i18n/angular-locale_pt-br.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-ui-router/release/angular-ui-router.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-input-masks/angular-input-masks-standalone.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-ui-mask/dist/mask.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-br-filters/release/angular-br-filters.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-animate/angular-animate.min.js'),
    path.join(settings.paths.app.root, '../bower_components/AngularJS-Toaster/toaster.min.js'),
    path.join(settings.paths.app.root, '../bower_components/AngularJS-Toaster/toaster.min.css'),
    path.join(settings.paths.app.root, '../bower_components/ng-dialog/js/ngDialog.min.js'),
    path.join(settings.paths.app.root, '../bower_components/ng-dialog/css/ngDialog.min.css'),
    path.join(settings.paths.app.root, '../bower_components/ng-dialog/css/ngDialog-theme-default.min.css'),
    path.join(settings.paths.app.root, '../bower_components/angular-cookies/angular-cookies.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-local-storage/dist/angular-local-storage.min.js'),
    path.join(settings.paths.app.root, '../bower_components/angular-bootstrap-show-errors/src/showErrors.min.js')
];

settings.files.constants = path.join(settings.paths.dist.root, 'ngConstants.js');

settings.files.scripts = [
    path.join(settings.paths.app.scripts, '**/*.js'),
	  path.join(settings.paths.app.scripts, '*.js')
];

settings.files.html = {
  index: path.join(settings.paths.app.html, 'index.html'),
  files: [
    path.join(settings.paths.app.html, '**/*.html')
  ]
};

settings.files.css = [
  path.join(settings.paths.app.css, '*.css')
];


module.exports = settings;
