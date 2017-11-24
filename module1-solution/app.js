(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', lunchCheckController);

LunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope) {
  $scope.disheslist = "";
  $scope.lunchmessage= "";
  $scope.num= 0;


  $scope.CheckLunch = function () {

    var numItem = 0;
    if ($scope.disheslist == "") {
      $scope.lunchmessage = "Please enter data first";
      return;
    }
    numItem = $scope.disheslist.split(',').length;

    $scope.num = numItem;
    switch (numItem) {
        case 1:
        case 2:
        case 3:
          $scope.lunchmessage = "Enjoy!";
            break;
        default:
          $scope.lunchmessage = "Too much!";
    };

};

}

})();
