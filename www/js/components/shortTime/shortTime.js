(function () {
  'use strict';

  angular.module('mirror-app.components').directive('shortTime', shortTimeFunc);

  function shortTimeFunc (BaseComponent, TickService) {
    var shortTime = new BaseComponent();

    shortTime.template = '<div class="short-time" editable-component>{{now | moment: \'h:mm\'}}</div>';
    shortTime.controller = shortTimeController;

    function shortTimeController ($scope, $element, $attrs) {
      $scope.componentId = $attrs.componentId;
      
      TickService.registerJob(_tick, true);

      function _tick () {
        $scope.now = moment();
      }
    }

    return (shortTime);
  }
})();
