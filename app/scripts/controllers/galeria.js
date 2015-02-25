'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures =$scope.pictures=[];

    var baseURL='http://lorempixel.com/300/180/';

    var titles=['Comida Sana','Salud y trabajo','Vida en la ciudad','Mantente activo',
    'Cuida tu aspecto','!!Vida Nocaturna'];

     var keywords=['food','business','city','sports','fashion',
     'nightlife'];

    var dummyText='lorem ipsum dolor sit amet, consectetur adipsicingg elit, Sed sed erat turpis Integer eget consectetur quam, Sed at quam ut dolor varius condimetum et it amte odio';

 $scope.addPics=function(i){
 	pictures.push({
 		url:baseURL+keywords[i],
 		title:titles[i],
 		summary:dummyText
 	});
 };
 for(var i=0;i<5;i++){
 	$scope.addPics(i);
 }
$scope.rate = 0;
$scope.max = 5;
$scope.isReadonly = false;
  });
