/* global angular localStorage bottle */

angular.module('myApp')
.controller('MainCtrl', function (todos) {
  var main = this;

  main.title = 'Hello World';

  console.log('Controller');

  angular.extend(main, {
    newTodo: '',
    todos: todos,
    save: function save () {
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
    }
  });
});
