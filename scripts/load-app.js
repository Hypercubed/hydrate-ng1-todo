'use strict';

// loads scripts in parallel but makes sure they
// are executed in order
// http://www.html5rocks.com/en/tutorials/speed/script-loading/
function loadScripts () {
  [
    '//code.angularjs.org/1.4.8/angular.js',
    '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.js',
    '//rawgit.com/chieffancypants/angular-loading-bar/master/build/loading-bar.js',
    'scripts/app.js',
    'components/todos.js',
    'scripts/boot.js'
  ].forEach(function (src, index) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
  });
}

setTimeout(loadScripts, 2000);
