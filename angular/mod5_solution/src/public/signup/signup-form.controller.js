(function() {
'use strict';

angular.module('public')
.controller('SignupFormController', SignupFormController);

SignupFormController.$inject = ['$http', 'ApiPath', 'UserInfoService', '$q']
function SignupFormController($http, ApiPath, UserInfoService, $q) {
  var $signupFormCtrl = this;

  $signupFormCtrl.firstName = '';
  $signupFormCtrl.lastName = '';
  $signupFormCtrl.email = '';
  $signupFormCtrl.phone = '';
  $signupFormCtrl.favoriteShortName = '';
  $signupFormCtrl.msg = '';

  $signupFormCtrl.favoriteValid = false;

  // Validate the short name and then save information about the user 
  // and their favorite food into the UserInfoService.
  $signupFormCtrl.submitForm = function() {
    $signupFormCtrl.getMenuItem()
    .then(function(result) {
      UserInfoService.firstName = $signupFormCtrl.firstName;
      UserInfoService.lastName = $signupFormCtrl.lastName;
      UserInfoService.email = $signupFormCtrl.email;
      UserInfoService.phone = $signupFormCtrl.phone;
      UserInfoService.favorite = result.data;
      UserInfoService.initialized = true;
      $signupFormCtrl.msg = 'Your information has been saved';
    })
    .catch(function(error) {
      $signupFormCtrl.msg = 'Your information could not be saved. Internal server error.';
    })
  }

  // Query the server for the item based on short name.
  // If it does exist, return the result.
  // If it doesn't exist, modify the info message and reject the promise.
  $signupFormCtrl.getMenuItem = function() {
    var promise = $http({
      url: ApiPath + '/menu_items/' + $signupFormCtrl.favoriteShortName + '.json'
    })
    .then(function(result) {
      $signupFormCtrl.msg = '';
      $signupFormCtrl.favoriteValid = true;
      return result
    })
    .catch(function(error) {
      $signupFormCtrl.favoriteValid = false;
      return $q.reject();
    });
    return promise
  }
}

})();
