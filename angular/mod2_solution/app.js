(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getBuyItems();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var buyItems = [];
  // Insert items to buy
  buyItems.push({name: "Cookies", quantity: 10})
  buyItems.push({name: "Cakes", quantity: 2})
  buyItems.push({name: "Candies", quantity: 30})
  buyItems.push({name: "Sodas", quantity: 5})
  buyItems.push({name: "Pies", quantity: 3})
  buyItems.push({name: "Ice cream", quantity: 7})

  // List of bought items
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(buyItems.splice(itemIndex, 1));
  };

  service.getBuyItems = function() {
    return buyItems;
  };

  service.getBoughtItems = function() {
    return boughtItems;
  };
}

})();