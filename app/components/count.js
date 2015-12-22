/* global bottle */

import angular from 'angular';

function CountCtrl (countData) {
  var count = this;

  count.title = 'Hello World';

  console.log('Controller');

  angular.extend(count, countData);

  angular.extend(count, {
    /* save: function save () {
      localStorage.setItem('todos', JSON.stringify(main.todos));
      setTimeout(function () {
        // we should save the HTML after it has been rendered
        bottle.refill();
      }, 0);
    },
    addTodo: function () {
      var text = main.newTodo.trim();
      if (text) {
        main.todos.push({ text: text });
        main.newTodo = '';
      }
      main.save();
    },
    removeTodo: function (index) {
      main.todos.splice(index, 1);
      main.save();
    } */
  });
}

CountCtrl.$inject = ['countData'];

export default CountCtrl;
