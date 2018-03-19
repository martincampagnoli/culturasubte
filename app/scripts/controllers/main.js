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
  .controller('MainCtrl', ['$scope', '$http', '$timeout', '$location', '$routeParams', function ($scope, $http, $timeout, $location, $routeParams) {
    $scope.lineasConst = {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      e: "E",
      f: "F",
      g: "G",
      h: "H",
    }

    function loadArtists() {
      var artistRef = firebase.database().ref('artists/');
        artistRef.once('value', function(snapshot) {
          $timeout(function(){
            $scope.artists = snapshot.val();
            console.dir(snapshot.val());
          });
        });
		}

    function loadLines() {
      var linesRef = firebase.database().ref('lines/');

      linesRef.once('value', function(snapshot) {
        $timeout(function(){
          $scope.lines = snapshot.val();
          console.dir(snapshot.val());
        });
      });
		}

    function init(){
        loadArtists();
        loadLines();
    }

    $scope.getArtistDetails = function(){
        var detailsRef = firebase.database().ref('artists/' + $routeParams.id);
          detailsRef.once('value', function(snapshot) {
            $timeout(function(){
              $scope.artist = snapshot.val();
              console.dir(snapshot.val());
            });
          });
    };

    $scope.goTo = function (str) {
      $location.url(str);
		};

    $scope.$on('$routeChangeStart', function() {
     $('html, body').animate({ scrollTop: 0 }, 'fast');
    });


    init();


  }]);
