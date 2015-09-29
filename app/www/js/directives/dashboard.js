(function () {
  'use strict';

  angular.module('mirror-app').directive('dashboard', dashboardFunc);

  function dashboardFunc ($log, $rootScope, $ionicGesture, DashboardComponents) {
    var dashboard = {
      restrict: 'E',
      transclude: true,
      replace: true,
      template: '<div class="dashboard" ng-transclude></div>',
      link: dashboardLink
    };

    function dashboardLink (scope, element, attrs) {
      // add components
      updateComponents();

      $rootScope.$on('update-components', updateComponents);

      function updateComponents () {
        DashboardComponents.get(_loadComponents, _onLoadError);
      }

      function _loadComponents (response) {
        var components = [];

        angular.forEach(response.data, function (component) {
          components.push(DashboardComponents.compile(component, scope));
        });

        element.html(components);
      }

      function _onLoadError (response) {
        $log.error(response);
      }
    }

    return (dashboard);
  }
})();
