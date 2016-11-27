(function() {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com');

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      url: (ApiBasePath + 'categories.json')
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      url: (ApiBasePath + 'menu_items.json?category=' + categoryShortName)
    });
  };
}

})();