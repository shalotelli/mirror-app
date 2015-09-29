(function () {
  'use strict';

  angular.module('mirror-app.services').service('DashboardComponents', DashboardComponents);

  function DashboardComponents ($log, $compile, $sails) {
    var self = this,
        _editMode = false;

    this.url = '/dashboard';

    this.get = getComponent;
    this.post = postComponent;
    this.delete = deleteComponent;
    this.compile = compile;
    this.toggleEditMode = toggleEditMode;
    this.inEditMode = inEditMode;

    function getComponent (success, error) {
      $sails.get(self.url).then(success, error);
    }

    function postComponent (params, success, error) {
      $sails.post(self.url, params).then(success, error);
    } 

    function deleteComponent (id, success, error) {
      $sails.delete(self.url + '/' + id).then(success, error);
    }

    function compile (component, scope) {
      var componentTag = '<' + component.componentName + ' component-id="' + component.id + '"></' + component.componentName + '>';

      return $compile(componentTag)(scope || true);
    }

    function toggleEditMode () {
      _editMode =! _editMode;
    }

    function inEditMode () {
      return _editMode;
    }
  }
})();
