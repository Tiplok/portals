'use strict';

app.controller('PortalController', ['$http', 'ApiService',
  function($http, ApiService){
    var vm = this;
    vm.portals = [];

    initialize();

    ////////////

    function initialize(){
      getPortals();
    }

    function getPortals(){

      return ApiService.getPortals()
        .then(function(data){
          vm.portals = data;
        })
        .catch(function(data){
        });
    }

}]);
