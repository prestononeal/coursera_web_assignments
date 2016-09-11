(function() {

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.foodList = '';
  $scope.message = '';

  $scope.checkFood = function() {
    if ($scope.foodList.trim().length == 0) {
      $scope.message = 'Please enter data first';
    } else {
      var items = $scope.foodList.split(',');
      if (items.length > 3) {
        $scope.message = 'Too much!';
      } else {
        $scope.message = 'Enjoy!';
      }
    }
  }
}

})();