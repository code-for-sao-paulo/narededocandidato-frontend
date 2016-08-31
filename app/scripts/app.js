/* global angular */
(function() {
  'use strict';

  angular.module('narededocandidato.front', [
    'ui.router', //angular-ui-router
    'pascalprecht.translate', //angular-translate
    'naif.base64', //angular-base64-upload
    'ui.utils.masks', //angular-input-masks,
    'ui.mask', //angular-ui-mask
    'idf.br-filters', //angular-br-filters
    'ngAnimate', //angular-animate
    'toaster', //angularjs-toaster
    'ngDialog', //ng-dialog
    'ngCookies', //angular-cookies
    'LocalStorageModule', //angular-local-storage
    'im.im-front.config'
  ]);
})();
