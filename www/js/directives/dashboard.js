(function () {
  'use strict';

  angular.module('mirror-app').directive('dashboard', dashboardFunc);

  function dashboardFunc (DashboardComponents) {
    var dashboard = {
      restrict: 'E',
      transclude: true,
      replace: true,
      template: '<div ng-transclude></div>',

      controller: function ($scope, $element, $attrs) {
        DashboardComponents.add([ 'day-date', 'short-time' ]);
      },

      link: function (scope, element, attrs) {
        // add class
        element.addClass('dashboard');

        // add components
        angular.forEach(DashboardComponents.components, function (component) {
          element.append(DashboardComponents.compile(component, scope));
        });
      }
    };

    return (dashboard);
  }
})();
