(function () {
  'use strict';

  angular.module('mirror-app.filters').filter('moment', momentFilterFunc);

  function momentFilterFunc (moment) {
    function momentFilter (value, format) {
      if (value) {
        return moment().format(angular.isString(format) ? format : 'MM/DD/YYYY');
      }

      return null;
    }

    return (momentFilter);
  }
})();
