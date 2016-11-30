(function() {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService', 'ApiPath'];
function MyInfoController(UserInfoService, ApiPath) {
  var myInfoCtrl = this;
  // Get information about the user from the UserInfoService and
  // display it in the "My Info" view
  myInfoCtrl.firstName = UserInfoService.firstName;
  myInfoCtrl.lastName = UserInfoService.lastName;
  myInfoCtrl.email = UserInfoService.email;
  myInfoCtrl.phone = UserInfoService.phone;
  myInfoCtrl.favoriteShortName = UserInfoService.favoriteShortName;
  myInfoCtrl.favoriteName = UserInfoService.favoriteName;
  myInfoCtrl.favoriteDescription = UserInfoService.favoriteDescription;
  myInfoCtrl.initialized = UserInfoService.initialized;
  myInfoCtrl.basePath = ApiPath;
}

})();
