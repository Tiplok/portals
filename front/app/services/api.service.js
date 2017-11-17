'use strict';

app.factory('ApiService', ['$http',
  function($http){
        var apiUrl = "http://localhost:3000/api";
        var service = {
          getPortals: getPortals,
          postPortals: postPortals,
          putPortals: putPortals,
          deletePortals: deletePortals
        };

        return service;

        ////////////

        function getPortals(){
            return $http.get(apiUrl+'/portals').then(
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

        function postPortals(portal){
          return $http.post(apiUrl+'/portals', portal).then(
            function success(response){
              return response.data;
            },
            function error(response){
              console.log('error postPortals '+data);
            }
          );
        };

        function putPortals(portal){
          return $http.put(apiUrl+'/portals/'+portal.id, portal).then(
            function success(response){
              return response.data;
            },
            function error(response){
              console.log('error putPortals '+data);
            }
          );
        };

        function deletePortals(portalId){
          return $http.delete(apiUrl+'/portals/'+portalId).then(
            function success(response){
              return response.data;
            },
            function error(response){
              console.log('error deletePortals '+data);
            }
          );
        };
  }])
