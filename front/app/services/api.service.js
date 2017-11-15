'use strict';

app.factory('ApiService', ['$http',
  function($http){
        var service = {
          getPortals: getPortals,
          postPortals: postPortals
        };

        return service;

        ////////////

        function getPortals(){
            return $http.get('http://localhost:3000/portals').then(
              function success(response){
                console.log('API call OK');
                return response.data;
              },
              function error(response){
                console.log('API call KO');
                console.log('error getPortals '+data);
              }
          );
        };

        function postPortals(){

        };
  }])
