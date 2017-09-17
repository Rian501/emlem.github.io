"use strict";

let emlem = angular.module("EmLem", ["ngRoute"]);



eatsApp.config(($routeProvider)=>{
    $routeProvider
    .when('/', {
        templateUrl: 'templates/landing.html',
        controller: ''
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: ''
    })
    .when('/projects', {
        templateUrl: 'templates/projects.html',
        controller: ''
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: ''
	})
    .otherwise('/');
});