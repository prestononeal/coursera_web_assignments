(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com')
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    // Return a Promise w/ all of the matched menu items.
    // First, get all of the menu items.
    return $http({
      url: (ApiBasePath + '/menu_items.json')
    })
    .then(function(result) {
      // Check the menu items against the given search term
      var matches = []
      for(var i = 0; i < result.data.menu_items.length; i++) {
        if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
          matches.push(result.data.menu_items[i]);
        }
      }
      return matches;
    });
  };
}

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var narrow = this;

  narrow.search = '';
  narrow.found = [];

  narrow.removeItem = function(itemIndex) {
    narrow.found.splice(itemIndex, 1);
  };

  narrow.searchMatchedItems = function() {
    if (narrow.search) {
      // getMatchedMenuItems() returns a promise
      MenuSearchService.getMatchedMenuItems(narrow.search)
      .then(function(result) {
        narrow.found = result;
      })
      .catch(function(error) {
        console.log('Could not get matches: ', error);
      });
    } else {
      narrow.found = [];
    }
  };
}

})();