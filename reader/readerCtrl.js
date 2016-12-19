angular.module('myFirstRouter')
  .controller('readerCtrl',function ($scope, $stateParams) {

    $scope. test = $stateParams.id;

    $scope. confirm = "Is really work, Son."
  })
