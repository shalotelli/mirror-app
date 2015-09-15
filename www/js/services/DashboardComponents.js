(function () {
  'use strict';

  angular.module('mirror-app.services').service('DashboardComponents', DashboardComponents);

  function DashboardComponents ($compile) {
    this.components = [];

    this.add = add;
    this.remove = remove;
    this.reset = reset;
    this.compile = compile;

    function add (component) {
      if (angular.isArray(component)) {
        this.components.push.apply(this.components, component);
      } else {
        this.components.push(component);
      }
    }

    function remove (component) {
      var foundComponent = this.components.indexOf(component);

      if (~foundComponent) {
        this.components.splice(foundComponent, 1);
      }

      return component;
    }

    function reset () {
      this.components.length = 0;
    }

    function compile (component, scope) {
      var componentTag = '<' + component + '></' + component + '>';
      return $compile(componentTag)(scope || true);
    }
  }
})();
