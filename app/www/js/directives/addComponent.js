(function () {
  'use strict';

  angular.module('mirror-app.directives').directive('addComponent', addComponentFunc);

  function addComponentFunc ($rootScope, $window, $ionicModal, DashboardComponents, RegisteredComponents) {
    var addComponentDirective = {
      restrict: 'E',
      replace: true,
      template: '<button class="button button-large button-positive add-component-button" ng-show="inEditMode()" ng-click="openAddComponentModal()">+</button>',
      controller: addComponentController,
      link: addComponentLink
    };

    function addComponentController ($scope, $element, $attrs) {
      $scope.registeredComponents = RegisteredComponents;
      $scope.inEditMode = DashboardComponents.inEditMode;

      $scope.openAddComponentModal = openAddComponentModal;
      $scope.addComponent = addComponent;

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
        }

        function _onComponentAddError () {}
        /*DashboardComponents.$add({
          component: component.key
        }).then(function (ref) {
          $scope.modal.hide();
          $rootScope.$broadcast('update-components', ref.key());
        });*/
      }
    }

    function addComponentLink (scope, element, attrs) {
      element.css('top', ($window.innerHeight - 75) + 'px');
    }

    return (addComponentDirective);
  }
})();
