(function() {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items.data.menu_items;
  itemsCtrl.category = items.data.category.name;
}

})();
