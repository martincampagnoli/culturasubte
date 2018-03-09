/*global $, firebase*/
'use strict';

/**
 * @ngdoc function
 * @name csApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the csApp
 */
angular.module('csApp')
  .controller('MainCtrl', ['$scope', '$http', '$timeout', '$location', function ($scope, $http, $timeout, $location) {

    function loadArtists() {
      var artistRef = firebase.database().ref('artists/');

      artistRef.once('value', function(snapshot) {
        $scope.artists = snapshot.val();
        console.dir(snapshot.val());

      });
		}

    function loadLines() {
      var linesRef = firebase.database().ref('lines/');

      linesRef.once('value', function(snapshot) {
        $scope.lines = snapshot.val();
        console.dir(snapshot.val());
      });
		}

    function init(){
        loadArtists();
        loadLines();
    }

    $scope.goTo = function (str) {
      $location.url(str);
		};

    $scope.$on('$routeChangeStart', function() {
     $('html, body').animate({ scrollTop: 0 }, 'fast');
    });


    init();


  }]);
