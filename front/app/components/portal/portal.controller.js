'use strict';

app.controller('PortalController', ['$http', 
  function($http){
    this.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
    var self = this;
    $http.get('http://localhost:3000/portals').then(
      function success(response){
        console.log('API call OK');
        self.portals = response.data;
      }, 
      function error(resposne){
        console.log('API call KO');
        self.portals = [
          {
            name: 'Portail 1'
          }, {
            name : 'Portail 2'
          }
        ]
      }
    );
}]);