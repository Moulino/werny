(function(angular, $) {
	"use strict";

	var app = angular.module('App');

	app.controller("AppController", function($scope) {
		$scope.loading = true;

		angular.element(document).ready(function() {
			$scope.loading = false;
			$scope.$apply();
		});
	});

	app.controller("MenuController", function($scope, $location) {
		$scope.linkTo = function(path) {
			$location.url(path);
		};
	});

	app.controller('HomeController', function($scope, $location, $anchorScroll) {

		$scope.presentationBtClass = "";

        $scope.scrollToPresentation = function() {
            $anchorScroll();
            $location.hash();
            $scope.presentationBtHidden = "hidden";
        };
	});

	app.controller("FactoryController", function($scope) {
		$scope.categories = [
			{
				url: "pictures/exploitation/drague/2.jpg",
				title: "Extraction",
				text: ""
			},
			{
				url: "pictures/exploitation/installation/4.jpg",
				title: "Traitement",
				text: ""
			},
			{
				url: "pictures/exploitation/gnt/1.jpg",
				title: "Recomposition",
				text: ""
			},
			{
				url: "pictures/exploitation/maintenance/2.jpg",
				title: "Maintenance",
				text: ""
			}
		];

		$scope.dragueImages = [
			{
				url: "pictures/exploitation/drague/1.jpg",
				text: "L'extraction des matériaux alluvionnaires se fait sous eau, au moyen d'une drague flottante ROHR - RS 8.0/280 Bf mise en service au mois de juin 2014.",
				title: "Photo aérienne"
			},
			{
				url: "pictures/exploitation/drague/2.jpg",
				text: "Le godet a une capacité de 8 m3.",
				title: "Godet"
			},
			{
				url: "pictures/exploitation/drague/3.jpg",
				text: "La trémie élimine les éléments supérieurs à 140mm, et dissocie le gravier du sable pour essorer ce dernier.",
				title: "Trépie - Essoreur"
			},
			{
				url: "pictures/exploitation/drague/4.jpg",
				text: "Flottantes et terrestres, elles acheminent le tout-venant vers son stockage et l'installation de traitement.",
				title: "Bandes"
			},
			{
				url: "pictures/exploitation/drague/5.jpg",
				text: "Il permet au conducteur de drague de gérer l'extraction.",
				title: "Poste de commande"
			},
			{
				url: "pictures/exploitation/drague/6.jpg",
				title: "Schéma de fonctionnement",
				text: ""
			}
		];


		$scope.installationImages = [
			{
				url: "pictures/exploitation/installation/1.jpg",
				text: "La configuration de l'installation permet de stocker tous nos matériaux sous sauterelles.",
				title: "Photo aérienne"
			},
			{
				url: "pictures/exploitation/installation/2.jpg",
				text: "Ils sont au nombre de quatre, le premier sépare le tout venant en quatre classes granulaires, dont la première, visible sur la photo de gauche, composée d'éléments supérieurs à 32 mm, est dirigée vers les broyeurs. Les autres classifient les granulats en produits finis concassés ou roulés.",
				title: "Cribles"
			},
			{
				url: "pictures/exploitation/installation/3.jpg",
				text: "Ils concassent les éléments supérieurs à 32 mm afin d'obtenir des granulats nécessaires aux usines de préfa et celles de produits pour chaussées.",
				title: "Broyeurs"
			},
			{
				url: "pictures/exploitation/installation/4.jpg",
				text: "Les roues à sables garantissent une granulométrie constante et homogène dans le temps de nos sables roulés et concassés.",
				title: "Roues à sables"
			},
			{
				url: "pictures/exploitation/installation/5.jpg",
				text: "Il permet de stocker jusqu'à 40 000 tonnes de tout-venant, facilitant la gestion des arrêts de la  drague ou de l'installation pour les besoins de la maintenance.",
				title: "Stacker polaire"
			},
			{
				url: "pictures/exploitation/installation/7.jpg",
				text: "Le pilote de l'installation gère les différents équipements à partir d'automates et d'un pupitre de commande.",
				title: "Poste de commande"
			},
			{
				url: "pictures/exploitation/installation/8.jpg",
				title: "Schéma de production",
				text: ""
			}
		];

		
	});

	app.controller("ProductsController", function($scope) {

	});

}(angular, angular.element));