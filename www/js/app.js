(function (moment) {
  'use strict';

  angular.module('mirror-app.controllers', []);
  angular.module('mirror-app.services', []);
  angular.module('mirror-app.filters', []);
  angular.module('mirror-app.directives', []);
  angular.module('mirror-app.components', []);

  angular.module('mirror-app', [
    'ionic',
    'mirror-app.controllers',
    'mirror-app.services',
    'mirror-app.filters',
    'mirror-app.directives',
    'mirror-app.components'
  ])

  .run(function ($ionicPlatform, TickService) {
    $ionicPlatform.ready(function () {
      // hide accessory bar
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      // org.apache.cordova.statusbar required
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });

    // start TickService
    TickService.start();
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '',
        templateUrl: 'templates/app.html',
        controller: 'DashboardController'
      });
  })

  .constant('moment', moment);
})(moment);
