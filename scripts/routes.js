/* global localStorage */

import angular from 'angular';

import MainCtrl from '../components/todos';
import CountCtrl from '../components/count';

angular.module('myApp')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'components/todos.html',
    controller: MainCtrl,
    controllerAs: 'main',
    resolve: {
      todos: function ($q, $timeout, cfpLoadingBar) {
        const todos = localStorage.getItem('todos')
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

        const delay = $q.defer();
        cfpLoadingBar.start();
        $timeout(function () {
          cfpLoadingBar.complete();
          delay.resolve(todos);
        }, 3000);  // I will cause a 3 second delay
        return delay.promise;
      }
    }
  })
  .when('/count', {
    controller: CountCtrl,
    controllerAs: 'count',
    templateUrl: 'components/count.html',
    resolve: {
     // I will cause a 3 second delay
      countData: function ($q, $timeout, cfpLoadingBar) {
        const countData = localStorage.getItem('count')
          ? JSON.parse(localStorage.getItem('count'))
          : { 'count': -1, 'date': new Date() };
        countData.count++;
        localStorage.setItem('count', JSON.stringify(countData));

        const delay = $q.defer();
        cfpLoadingBar.start();
        $timeout(function () {
          cfpLoadingBar.complete();
          delay.resolve(countData);
        }, 3000);  // I will cause a 3 second delay
        return delay.promise;
      }
    }
  })
  .when('/help', {
    templateUrl: 'components/help.html'
  })
  .otherwise({ redirectTo: '/' });
});
