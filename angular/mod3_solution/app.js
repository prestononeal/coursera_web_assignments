(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

function MenuSearchService() {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {

  };
}

NarrowItDownController.inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {

}

})();