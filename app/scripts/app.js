'use strict';

/**
 * @ngdoc overview
 * @name csApp
 * @description
 * # csApp
 *
 * Main module of the application.
 */
angular
  .module('csApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/portfolio', {
        templateUrl: 'views/portfolio.html'
      })
	  .when('/lines', {
        templateUrl: 'views/lines.html'
      })
	  .when('/info', {
        templateUrl: 'views/info.html'
      })
	  .when('/notes', {
        templateUrl: 'views/notes.html'
      })
	  .when('/services', {
        templateUrl: 'views/services.html'
      })
	  .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
