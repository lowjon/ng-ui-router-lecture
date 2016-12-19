angular.module('myFirstRouter',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/'); //sets the default page to home.
  $urlRouterProvider.otherwise('/'); //if the url specified doesnt exist, sends to home html

  $stateProvider
    .state('home', {
      controller: 'homeCtrl',
      url: '/',
      templateUrl: './home/home.html'
    })

    .state('other', {
      controller: 'otherCtrl',
      url: '/other',
      templateUrl: './otherState/other.html'
    })
    .state('reader',{
      controller: 'readerCtrl',
      url: '/reader/:id',
      templateUrl: './reader/reader.html'
    })


})
