(function () {
  'use strict';

  angular.module('mirror-app.components').directive('dayDate', dayDateFunc);

  function dayDateFunc (BaseComponent, TickService) {
    var dayDate = new BaseComponent();

    dayDate.template = '<div class="day-date">{{now | moment: \'dddd [the] Mo\'}}</div>';
    dayDate.controller = dayDateController;

    function dayDateController ($scope, $element, $attrs) {
      TickService.registerJob(_tick, true);

      function _tick () {
        $scope.now = moment();
      }
    }

    return (dayDate);
  }
})();
