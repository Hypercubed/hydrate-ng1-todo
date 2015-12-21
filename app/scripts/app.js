/* global localStorage bottle */

import angular from 'angular';
import 'angular-route';
import 'angular-loading-bar';

angular.module('myApp', ['ngRoute', 'angular-loading-bar'])
.run(function ($rootScope, $timeout) {
  $rootScope.$on('$routeChangeStart', function () {
    // bottle.open();
  });

  $rootScope.$on('$routeChangeSuccess', function () {
    $timeout(function () {
      console.log('app is ready');
      // replaces fake content with live
      bottle.drink();
      document.getElementById('app').classList.remove('hidden');

      // save the starting HTML
      bottle.refill();
    });
  });
});
