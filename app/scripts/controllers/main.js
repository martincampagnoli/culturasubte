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
      $timeout(function(){
        $http.get('./data/lines.json').then(function(response) {
          $scope.lines = response.data;
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

    $scope.getNote = function (){
      UIHelper.blockUI();
      loadNotes();
      $timeout(function(){
        $scope.note = $scope.notes[$routeParams.id];
        UIHelper.unblockUI();
      },500);

    }

    $scope.goTo = function (str) {
      $location.url(str);
		};

    $scope.$on('$routeChangeStart', function() {
     $('html, body').animate({ scrollTop: 0 }, 'fast');
    });


    init();


  }]);
