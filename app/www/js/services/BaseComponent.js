(function () {
  'use strict';

  angular.module('mirror-app.components').factory('BaseComponent', BaseComponentFunc);

  function BaseComponentFunc () {
    function BaseComponent () {
      this.scope = {};
      this.restrict = 'E';
    }

    return (BaseComponent);
  }
})();
