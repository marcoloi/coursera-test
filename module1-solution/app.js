(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', lunchCheckController);

LunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope) {
  //Properties initialization
  $scope.disheslist = "";
  $scope.lunchmessage= "";



  $scope.CheckLunch = function () {
    //Dishes counter initialization
    var numItem = 0;

    // Check if textbox is empty
    if ($scope.disheslist == "") {
      $scope.lunchmessage = "Please enter data first";
      return;
    }
    //Check the number of dishes
    numItem = $scope.disheslist.split(',').length;

    //Message generation on dishes number
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
