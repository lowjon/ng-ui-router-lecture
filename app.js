angular.module('myFirstRouter',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      controller: 'homeCtrl',
      url: '/',
      templateUrl: './home/home.html'
    })

    .state('other',{
      controller: 'otherCtrl',
      url: '/other',
      templateUrl: './otherState/other.html'
    })


})
