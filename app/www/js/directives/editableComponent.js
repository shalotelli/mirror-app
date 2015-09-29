(function () {
  'use strict';

  angular.module('mirror-app').directive('editableComponent', editableComponentFunc);

  function editableComponentFunc ($rootScope, $ionicGesture, $log, DashboardComponents) {
    var editableComponent = {
      restrict: 'A',
      transclude: true,
      templateUrl: 'templates/directives/editableComponent.html',
      controller: editableComponentController,
      link: editableComponentLink
    };

    function editableComponentController ($scope, $element, $attrs) {
      $scope.inEditMode = DashboardComponents.inEditMode;

      $scope.remove = remove;

      function remove () {
        var component;

        if (angular.isUndefined($scope.componentId)) {
          $log.error('Component ID not found');
          return false;
        }

        DashboardComponents.delete($scope.componentId, _onDeleteSuccess, _onDeleteError);

        function _onDeleteSuccess () {
          $rootScope.$broadcast('update-components', $scope.componentId);
        }

        function _onDeleteError (error) {
          $log.error(error);
        }
      }
    }

    function editableComponentLink (scope, element, attrs) {
      $ionicGesture.on('hold', _onHold, element);

      function _onHold () {
        DashboardComponents.toggleEditMode();
      }
    }

    return (editableComponent);
  }
})();
