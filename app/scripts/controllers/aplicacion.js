'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp').controller(
    'AplicacionCtrl', 
    function ($scope) {
        var id="aplicacion";
    	activeMenu(id);
        // uso de variable $scope
        $scope.nombres = "Christian";
        $scope.apellidos = "Portilla Pauca";
    }
);