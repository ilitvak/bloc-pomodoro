'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		})
		.state('dashboard', {
			url: '/dashboard',
			abstract: true,
			templateUrl: 'modules/core/views/dashboard.client.view.html'
		})
		.state('dashboard.pomodoroTimer', {
			url: '',
			templateUrl:'modules/core/views/dashboard.pomodoro-timer.view.html'
		})
		.state('dashboard.shortBreakTimer', {
			templateUrl:'modules/core/views/dashboard.shortbreak-timer.view.html'
		})
		.state('dashboard.longBreakTimer', {
			templateUrl: 'modules/core/views/dashboard.longbreak-timer.view.html'
		});
	}
]);