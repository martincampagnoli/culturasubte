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
      h: "H",
    };

    function loadArtists() {
      var artistRef = firebase.database().ref('artists/');
      UIHelper.blockUI();
        artistRef.once('value', function(snapshot) {
          $timeout(function(){
            $scope.artists = snapshot.val();
            UIHelper.unblockUI();
          });
        });
		}

    function loadLines() {
      var linesRef = firebase.database().ref('lines/');

      linesRef.once('value', function(snapshot) {
        $timeout(function(){
          $scope.lines = snapshot.val();
        });
      });
		}

    function loadNotes(){
        $timeout(function(){
          $http.get('./data/notes.json').then(function(response) {
            $scope.notes = response.data;
        });
      });
    }

    function init(){
        loadArtists();
        loadLines();
        loadNotes();
    }

    $scope.getArtistDetails = function(){
        var detailsRef = firebase.database().ref('artists/' + $routeParams.id);
          detailsRef.once('value', function(snapshot) {
            $timeout(function(){
              $scope.artist = snapshot.val();
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
