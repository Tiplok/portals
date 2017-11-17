'use strict';

app.controller('PortalController', ['$http', 'ApiService','UtilsService',
  function($http, ApiService, UtilsService){
    var vm = this;

    // variables of PortalController
    vm.portals = [];

    // functions of PortalController
    vm.getPortals = getPortals;
    vm.postPortals = postPortals;
    vm.putPortals = putPortals;
    vm.deletePortals = deletePortals;

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

    function postPortals(portal){
      return ApiService.postPortals(portal)
        .then(function(data){
          vm.portals.push(data);
        })
        .catch(function(data){
        });
    }

    function putPortals(portal){
      return ApiService.putPortals(portal)
        .then(function(data){

          var newArray = UtilsService.updateObjectOfArray(vm.portals, data);
          if(newArray != false){
            vm.portals = newArray;
          } else {
            // Erreur survenue
            console.log('erreur survenue');
          }

        })
        .catch(function(data){
        });
    }

    function deletePortals(portal){
      return ApiService.deletePortals(portal.id)
        .then(function(data){
          var newArray = UtilsService.deleteObjectOfArray(vm.portals, data);
          if(newArray != false){
            vm.portals = newArray;
          } else {
            // Erreur survenue
            console.log('erreur survenue');
          }
        })
        .catch(function(data){
        });
    }



}]);
