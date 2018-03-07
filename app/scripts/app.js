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
      })
      .when('/about', {
        templateUrl: 'views/about.html',
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


  angular.module('csApp')
    .directive('gridEffect', function(){
      return {
        restrict: 'A',
        link: function(scope, elem) {
          new AnimOnScroll(elem[0], {
            minDuration : 0.4,
            maxDuration : 0.7,
            viewportFactor : 0.2
          } );
        }
    }});
