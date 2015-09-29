(function () {
  'use strict';

  angular.module('mirror-app.controllers').controller('DashboardController', DashboardController);

  function DashboardController ($scope, $log, $sails, DashboardComponents) {
    var dashboardWatch = $sails.on(DashboardComponents.url, _onDashboardUpdate);

    $scope.$on('$destroy', _destorySailsWatch);

    function _onDashboardUpdate (message) {
      $log.info(message);
    }

    function _destorySailsWatch () {
      $sails.off(DashboardComponents.url, dashboardWatch);
    }
  }
})();
