(function () {
  'use strict';

  angular.module('mirror-app.components').directive('dayDate', dayDateFunc);

  function dayDateFunc (BaseComponent, TickService) {
    var dayDate = new BaseComponent();

    dayDate.template = '<div class="day-date" editable-component>{{now | moment: \'dddd [the] Do\'}}</div>';
    dayDate.controller = dayDateController;

    function dayDateController ($scope, $element, $attrs) {
      $scope.componentId = $attrs.componentId;
      
      TickService.registerJob(_tick, true);

      function _tick () {
        $scope.now = moment();
      }
    }

    return (dayDate);
  }
})();
