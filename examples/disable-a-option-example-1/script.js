(function(angular) {
 'use strict';
  var myApp = angular.module('DisableAOptionExample1App', ['nya.bootstrap.select']);

  myApp.controller('MainController', ['$scope', function($scope){
  $scope.options=['Alpha', 'Bravo', 'Charlie'];
  }]);
})(window.angular);