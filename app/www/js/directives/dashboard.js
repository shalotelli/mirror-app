(function () {
  'use strict';

  angular.module('mirror-app').directive('dashboard', dashboardFunc);

  function dashboardFunc ($log, $rootScope, $ionicGesture, $sails, DashboardComponents) {
    var dashboard = {
      restrict: 'E',
      transclude: true,
      replace: true,
      template: '<div class="dashboard" ng-transclude></div>',
      link: dashboardLink
    };

    function dashboardLink (scope, element, attrs) {
      var dashboardComponentsUrl = DashboardComponents.url.replace('/', ''),
          dashboardWatch = $sails.on(dashboardComponentsUrl, _onDashboardUpdate);

      // add components
      updateComponents();

      scope.$on('$destroy', _destorySailsWatch);

      $rootScope.$on('update-components', updateComponents);

      function updateComponents () {
        DashboardComponents.get(_loadComponents, _onLoadError);
      }

      function _loadComponents (response) {
        var components = [];

        DashboardComponents.setComponents(response.data);

        angular.forEach(DashboardComponents.components, function (component) {
          components.push(DashboardComponents.compile(component, scope));
        });

        element.html(components);
      }

      function _onLoadError (response) {
        $log.error(response);
      }

      function _onDashboardUpdate (message) {
        updateComponents();
      }

      function _destorySailsWatch () {
        $sails.off(dashboardComponentsUrl, dashboardWatch);
      }
    }

    return (dashboard);
  }
})();
