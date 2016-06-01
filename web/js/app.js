(function(angular) {
	"use strict";

	var app = angular.module('App', ['ngMaterial', 'ngRoute']);

	app.config(function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider.when("/home", {
			templateUrl: "templates/home.html.ng",
			controller: "HomeController"
		})
		.when("/factory", {
			templateUrl: "templates/factory.html.ng",
			controller: "FactoryController"
		})
		.when("/products", {
			templateUrl: "templates/products.html.ng",
			controller: "ProductsController"
		})
		.when("/quality", {
			templateUrl: "templates/quality.html.ng"
		})
		.when("/shipping", {
			templateUrl: "templates/shipping.html.ng"
		})
		.when("/environment", {
			templateUrl: "templates/environment.html.ng"
		})
		.when('/realizations', {
			templateUrl: "templates/realizations.html.ng"
		})
		.when("/contact", {
			templateUrl: "templates/contact.html.ng"
		})
		.otherwise({
			redirectTo: "/home"
		});
	});

}(angular));