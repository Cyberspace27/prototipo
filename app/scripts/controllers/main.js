'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL='http://lorempixel.com/960/450/';
    $scope.setInterval=5000;

    $scope.slides=[
    {
    	title:'Aprende a mantenerte en forma',
    	image:baseURL+'sports/',
    	text:'!Practica algun deporte todos los dias'
    },
    {
    	title:'Buena aimentacion',
    	image:baseURL+'food/',
    	text:'!La importancia de frutas y vegetales en las comidas'
    },
    {
    	title:'En contacto con la naturaleza',
    	image:baseURL+'nature/',
    	text:'!Mantente en armonia con la naturaleza'
    }
    ];
    //Modelo para os tres bloques de contenido
    var baseURL='http://lorempixel.com/200/200/';
    $scope.contenido=[
    {
    	img:baseURL+'people',
    	title:'Sobre Nosotros',
    	summary:'somos una empresa comprometida con la vida sana'
    },
    {
    	img:baseURL+'business',
    	title:'Nuestros Servicios',
    	summary:'Ofrecemos asesoria profesional para mantenerse Sano, buena alimentacion' 
    },
    {
    	img:baseURL+'transport',
    	title:'Contactanos',
    	summary:'#333, Buena vida >Online, Plaza Central, Durance, zip-432167' 
    }
    ];

  });
