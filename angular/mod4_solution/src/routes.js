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
    url: '/',
    templateUrl: 'src/data/templates/home.template.html'
  })

  // Categories
  .state('categories', {
    url: '/categories',
    template: '<categories categories=catCtrl.categories></categories>',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items
  .state('categories.items', {
    url: '/{categoryId}/items',
    template: '<items items=itemsCtrl.items category=itemsCtrl.category></items>',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  })

}

})();
