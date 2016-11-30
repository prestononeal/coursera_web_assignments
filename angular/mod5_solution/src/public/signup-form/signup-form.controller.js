(function() {
'use strict';

angular.module('public')
.controller('SignupFormController', SignupFormController);

SignupFormController.$inject = ['$http', 'ApiPath']
function SignupFormController($http, ApiPath) {
  var $signupFormCtrl = this;

  $signupFormCtrl.firstName = '';
  $signupFormCtrl.lastName = '';
  $signupFormCtrl.email = '';
  $signupFormCtrl.phone = '';
  $signupFormCtrl.favoriteDish = '';
  $signupFormCtrl.msg = '';

  $signupFormCtrl.submitForm = function() {
    var promise = $http({
      url: ApiPath + '/menu_items/' + $signupFormCtrl.favoriteDish + '.json'
    })
    .then(function(result) {
      // TODO: save the information to a service
      $signupFormCtrl.msg = 'Your information has been saved';
    })
    .catch(function(error) {
      $signupFormCtrl.msg = 'No such menu number exists';
    });
  }
}

})();
