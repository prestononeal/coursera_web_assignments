(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider

  // Home page
  .state('home', {
    url: '/'
  })

  // Categories
  .state('categories', {
    url: '/categories'
  })

  // Items
  .state('categories.items', {
    url: '/items'
  })


}

})();