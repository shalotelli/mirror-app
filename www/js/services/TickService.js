(function () {
  'use strict';

  angular.module('mirror-app.services').service('TickService', TickService);

  function TickService ($interval) {
    var self = this;

    this.ticker = null;
    this.delay = 1000;
    this.jobs = [];

    this.start = start;
    this.stop = stop;
    this.registerJob = registerJob;
    this.reset = reset;

    function start () {
      this.ticker = $interval(_tick, this.delay);
    }

    function stop () {
      if (this.ticker) {
        $interval.cancel(this.ticker);
      }
    }

    function registerJob (job, runNow) {
      this.jobs.push(job);

      if (runNow) {
        _runJob(job);
      }
    }

    function reset () {
      this.jobs.length = 0;
    }

    function _tick () {
      angular.forEach(self.jobs, function (job) {
        _runJob(job);
      });
    }

    function _runJob (job) {
      if (angular.isFunction(job)) {
        job.call(self);
      }
    }
  }
})();
