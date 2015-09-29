(function () {
  'use strict';

  angular.module('mirror-app.services').service('DashboardComponents', DashboardComponents);

  function DashboardComponents ($compile, $firebaseArray, Firebase, FirebaseUrl) {
    var components,
        firebase,
        _editMode = false;

    components = new Firebase(FirebaseUrl + 'dashboardcomponents');

    firebase = $firebaseArray.$extend({
      $compile: compile,
      toggleEditMode: toggleEditMode,
      inEditMode: inEditMode
    });

    function compile (component, scope) {
      var componentTag = '<' + component.component + ' component-id="' + component.$id + '"></' + component.component + '>';
      return $compile(componentTag)(scope || true);
    }

    function toggleEditMode () {
      _editMode =! _editMode;
    }

    function inEditMode () {
      return _editMode;
    }

    return firebase(components);
  }
})();
