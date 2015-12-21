/* global localStorage */

import angular from 'angular';

import MainCtrl from '../components/todos';

angular.module('myApp')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'components/todos.html',
    controller: MainCtrl,
    controllerAs: 'main',
    resolve: {
     // I will cause a 3 second delay
      todos: function ($q, $timeout, cfpLoadingBar) {
        var delay = $q.defer();
        cfpLoadingBar.start();
        $timeout(function () {
          var todos = localStorage.getItem('todos')
            ? JSON.parse(localStorage.getItem('todos'))
            : [
             { text: 'item 1' },
             { text: 'item 2' },
             { text: 'item 3' },
             { text: 'item 4' },
             { text: 'item 5' },
             { text: 'item 6' },
             { text: 'item 7' },
             { text: 'item 8' },
             { text: 'item 9' },
             { text: 'item 10' }
            ];
          cfpLoadingBar.complete();
          delay.resolve(todos);
        }, 3000);
        return delay.promise;
      }
    }
  })
  .when('/help', {
    templateUrl: 'components/help.html'
  })
  .otherwise({ redirectTo: '/' });
});
