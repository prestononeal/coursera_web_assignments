(function() {
'use strict';

angular.module('common')
.service('UserInfoService', UserInfoService);

function UserInfoService() {
  var service = this;

  // This service contains info about the user and their favorite food.
  // These will be read and set from controllers using this service
  service.firstName = '';
  service.lastName = '';
  service.email = '';
  service.phone = '';
  service.favorite = {};
  service.initialized = false;
}

})();
