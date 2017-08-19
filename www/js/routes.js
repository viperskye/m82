angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mTNGM82', {
    url: '/m82',
    templateUrl: 'templates/mTNGM82.html',
    controller: 'mTNGM82Ctrl'
  })

  .state('mTNGM822', {
    url: '/display',
    templateUrl: 'templates/mTNGM822.html',
    controller: 'mTNGM822Ctrl'
  })

$urlRouterProvider.otherwise('/m82')

  

});