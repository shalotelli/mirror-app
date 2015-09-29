(function () {
  'use strict';

  angular.module('mirror-app.directives').directive('addComponent', addComponentFunc);

  function addComponentFunc ($rootScope, $window, $log, $ionicModal, DashboardComponents, RegisteredComponents) {
    var addComponentDirective = {
      restrict: 'E',
      replace: true,
      template: '<button class="button button-large button-positive add-component-button" ng-show="showAddButton()" ng-click="openAddComponentModal()">+</button>',
      controller: addComponentController,
      link: addComponentLink
    };

    function addComponentController ($scope, $element, $attrs) {
      $scope.registeredComponents = RegisteredComponents;

      $scope.openAddComponentModal = openAddComponentModal;
      $scope.addComponent = addComponent;
      $scope.showAddButton = showAddButton;

      $ionicModal.fromTemplateUrl('templates/directives/addComponentModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      function openAddComponentModal () {
        $scope.modal.show();
      }

      function addComponent (component) {
        var params = {
          componentName: component.key
        };

        DashboardComponents.post(params, _onComponentAddSuccess, _onComponentAddError);

        function _onComponentAddSuccess () {
          $scope.modal.hide();
          $rootScope.$broadcast('update-components');
        }

        function _onComponentAddError (error) {
          $log.error(error);
        }
      }

      function showAddButton () {
        return DashboardComponents.inEditMode() || !DashboardComponents.components.length;
      }
    }

    function addComponentLink (scope, element, attrs) {
      element.css('top', ($window.innerHeight - 75) + 'px');
    }

    return (addComponentDirective);
  }
})();
