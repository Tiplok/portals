'use strict';

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('root', {
        url: '/',
        redirectTo: '/home'
    })
    .state('home', {
        url: '/home',
        templateUrl: 'app/components/portal/portal.view.html',
        controller: 'PortalController as vm',
        data: {
            css: [
                'assets/styles/css/home.css'
            ]
        }
    })
}]);
