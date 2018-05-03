/*global $, AnimOnScroll*/

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
      .when('/form', {
            templateUrl: 'views/form.html'
          })
      .when('/details/:id', {
        templateUrl: 'views/details.html'
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
    };
  });

    angular.module('csApp')
      .directive('menuOpen', function(){
        return {
          restrict: 'A',
          link: function() {
            			// Menu settings
            $('#menuToggle, .menu-close, .menuItem').on('click', function(){
            	$('#menuToggle').toggleClass('active');
            	$('body').toggleClass('body-push-toleft');
            	$('#theMenu').toggleClass('menu-open');
            });
          }
      };
    });


function UIHelperMethods() {
    var UIBlocked = 0;
    $.blockUI.defaults.css = {
        padding: 0,
        margin: 0,
        width: '30%',
        top: '40%',
        left: '35%',
        textAlign: 'center',
        cursor: 'wait',
        fontSize:'80px',
        color: 'rgba(255, 255, 255, 1)'
    };

    $.blockUI.defaults.baseZ = 9999;

    return {
        blockUI: function () {
            if (UIBlocked === 0) {
                UIBlocked++;
                $.blockUI({
                    message: '<div><span class="fa fa-spinner fa-spin"></span></div>'
                });
            } else {
                UIBlocked++;
            }
        },
        unblockUI: function () {
            if (UIBlocked > 0) {
                UIBlocked--;
                if (UIBlocked === 0) {
                    $.unblockUI();
                }
            }
        },
        scrollToTop: function (windowService) {
            windowService.scrollTo(0, 0);
        }
    };
}

var UIHelper = new UIHelperMethods();
