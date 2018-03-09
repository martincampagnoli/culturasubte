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
    $scope.artistUrl = 'data/projects.json';
    $scope.linesUrl = 'data/lines.json';

    $scope.loadArtists = function () {
			//UIHelper.blockUI();
			$timeout(function(){
				$http.get($scope.artistUrl).success(function (data){
					$scope.artists = data;
					//UIHelper.unblockUI();
				});
			}, 250);
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

  }]);
