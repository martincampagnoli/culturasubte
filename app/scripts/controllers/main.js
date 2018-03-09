/*global $*/
'use strict';

/**
 * @ngdoc function
 * @name csApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the csApp
 */
angular.module('csApp')
  .controller('MainCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

    function loadArtists() {
      var artistRef = firebase.database().ref('artists/');

      artistRef.once('value', function(snapshot) {
        $scope.artists = snapshot.val();
        console.dir(snapshot.val());

      });
		};

    function loadLines() {
      var linesRef = firebase.database().ref('lines/');

      linesRef.once('value', function(snapshot) {
        $scope.lines = snapshot.val();
        console.dir(snapshot.val());
      });
		};


    $scope.loadLines = function () {
			//UIHelper.blockUI();
			$timeout(function(){
				$http.get($scope.linesUrl).success(function (data){
					$scope.lines = data;
					//UIHelper.unblockUI();
				});
			}, 250);
		};

    $scope.$on('$routeChangeStart', function() {
     $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

    function init(){
      loadArtists();
      loadLines();
    }

    init();


  }]);
