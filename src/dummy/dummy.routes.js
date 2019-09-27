(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        title: 'Home',
        component: 'pfHome'
      })
      .state({
        name: 'test',
        url: '/test',
        title: 'Test',
        component: 'pfTest'
      });

    $urlRouterProvider.otherwise('home');
  }
})();