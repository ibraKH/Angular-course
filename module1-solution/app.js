(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchMenu = "";
      $scope.message = "";
      $scope.inputBorderStyle = "";
  
      $scope.checkLunch = function () {
        // Split the input considering empty items
        var items = $scope.lunchMenu.split(',')
          .map(function (item) {
            return item.trim();
          })
          .filter(function (item) {
            return item !== "";
          });
  
        if (items.length === 0) {
          $scope.message = "Please enter data first";
          $scope.messageStyle = { color: 'red' };
          $scope.inputBorderStyle = { border: '2px solid red' };
        } else if (items.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageStyle = { color: 'green' };
          $scope.inputBorderStyle = { border: '2px solid green' };
        } else {
          $scope.message = "Too much!";
          $scope.messageStyle = { color: 'green' };
          $scope.inputBorderStyle = { border: '2px solid green' };
        }
      };
    }
})();