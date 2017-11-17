'use strict';

app.factory('UtilsService', ['$http',
  function($http){
        var service = {
          updateObjectOfArray: updateObjectOfArray,
          deleteObjectOfArray: deleteObjectOfArray
        };

        return service;

        ////////////

        function updateObjectOfArray(array, object){
          // On cherche l'index de l'objet à mettre à jour
          var objIndex = array.findIndex((obj => obj.id == object.id));

          // Si l'objet n'a pas été trouvé
          if(objIndex == -1){
            // On met à jour un objet qui n'existe plus ou pas
            return false;
          } else {
            // On met à jour l'objet
            array[objIndex] = object;
            return array;
          }
        }

        function deleteObjectOfArray(array, object){
          // On cherche l'index de l'objet à supprimer
          var objIndex = array.findIndex((obj => obj.id == object.id));

          // Si l'objet n'a pas été trouvé
          if(objIndex == -1){
            // On supprime un objet qui n'existe plus ou pas
            return false;
          } else {
            // On supprime l'objet
            return array.splice(objIndex, 1);
          }
        }

  }])
