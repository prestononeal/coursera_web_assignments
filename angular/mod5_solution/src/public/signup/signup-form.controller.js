(function() {
'use strict';

angular.module('public')
.controller('SignupFormController', SignupFormController);

SignupFormController.$inject = ['$http', 'ApiPath', 'UserInfoService']
function SignupFormController($http, ApiPath, UserInfoService) {
  var $signupFormCtrl = this;

  $signupFormCtrl.firstName = '';
  $signupFormCtrl.lastName = '';
  $signupFormCtrl.email = '';
  $signupFormCtrl.phone = '';
  $signupFormCtrl.favoriteShortName = '';
  $signupFormCtrl.msg = '';

  // Query the server for the item based on short name. Save information
  // about the user and their favorite food into the UserInfoService.
  $signupFormCtrl.submitForm = function() {
    var promise = $http({
      url: ApiPath + '/menu_items/' + $signupFormCtrl.favoriteShortName + '.json'
    })
    .then(function(result) {
      console.log(result);
      // TODO: save the information to a service
      UserInfoService.firstName = $signupFormCtrl.firstName;
      UserInfoService.lastName = $signupFormCtrl.lastName;
      UserInfoService.email = $signupFormCtrl.email;
      UserInfoService.phone = $signupFormCtrl.phone;
      UserInfoService.favoriteShortName = $signupFormCtrl.favoriteShortName;
      UserInfoService.favoriteName = result.data.name;
      UserInfoService.favoriteDescription = result.data.description;
      UserInfoService.initialized = true;
      $signupFormCtrl.msg = 'Your information has been saved';
    })
    .catch(function(error) {
      $signupFormCtrl.msg = 'No such menu number exists';
    });
  }
}

})();
