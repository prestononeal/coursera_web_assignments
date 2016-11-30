(function() {
'use strict';

angular.module('public')
.controller('SignupFormController', SignupFormController);

SignupFormController.$inject = ['$http']
function SignupFormController($http) {
  var $ctrl = this;

  $ctrl.firstName = '';
  $ctrl.lastName = '';
  $ctrl.email = '';
  $ctrl.phone = '';
  $ctrl.favoriteDish = '';
  $ctrl.msg = '';
}

})();
