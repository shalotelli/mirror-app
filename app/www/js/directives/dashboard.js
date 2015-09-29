(function () {
  'use strict';

  angular.module('mirror-app').directive('dashboard', dashboardFunc);

  function dashboardFunc ($rootScope, $ionicGesture, DashboardComponents) {
    var dashboard = {
      restrict: 'E',
      transclude: true,
      replace: true,
      template: '<div class="dashboard" ng-transclude></div>',
      link: dashboardLink
    };

    function dashboardLink (scope, element, attrs) {
      // add components
      DashboardComponents.$loaded().then(_loadComponents);

      $rootScope.$on('update-components', _onUpdateComponents);

      function _loadComponents () {
        var components = [];

        angular.forEach(DashboardComponents, function (component) {
          components.push(DashboardComponents.$compile(component, scope));
        });

        element.html(components);
      }

      function _onUpdateComponents (event, componentId) {
        _loadComponents();
      }
    }

    return (dashboard);
  }
})();
