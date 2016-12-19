angular.module('myFirstRouter')
  .controller('otherCtrl', function ($scope) {

    $scope.creator = 'Jon';

    $scope.technologies = [
      'angular',
      'html',
      'css',
      'Angular UI Router'
    ]
    $scope.test = 'Merp!'
  })
