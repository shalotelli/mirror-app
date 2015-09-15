(function () {
  'use strict';

  angular.module('mirror-app').directive('cancelEditComponent', cancelEditComponentFunc);

  function cancelEditComponentFunc ($rootScope, $ionicGesture, DashboardComponents) {
    var cancelEditComponent = {
      restrict: 'A',
      controller: cancelEditComponentController
    };

    function cancelEditComponentController ($scope, $element, $attrs) {
      var editModeGesture;

      $scope.$watch(function () {
        return DashboardComponents.inEditMode();
      }, _onEditModeChange);

      function _onEditModeChange () {
        if (DashboardComponents.inEditMode()) {
          editModeGesture = $ionicGesture.on('tap', _onTap, $element);
        } else {
          if (angular.isDefined(editModeGesture)) {
            $ionicGesture.off(editModeGesture, 'tap', _onTap);
          }
        }
      }

      function _onTap (event) {
        if (event.target.tagName.toLowerCase() === 'ion-content') {
          DashboardComponents.toggleEditMode();
        }
      }
    }

    return (cancelEditComponent);
  }
})();
