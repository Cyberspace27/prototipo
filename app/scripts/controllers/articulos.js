'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
  $scope.posts=[
  {	
  	title:'Alimentos buenos para la salud',
  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing el. Vivamus rhoncus quam'
  },
  {	
  	title:'Alimentos menos buenos para la salud',
  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing el. Vivamus rhoncus quam'
  },
  {	
  	title:'!!Limita tu cantidad de hidratos de carbono',
  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing el. Vivamus rhoncus quam'
  }

  ];
  });
