
// app.js

/**
* ScheduleApp Module
*
* Description
*/
angular.module('scheduleApp', ['firebase'])

	// application main controller
	.controller('mainController', function ($scope, $firebase){

		// connect to firebase
		var ref = new Firebase("https://scorching-fire-1003.firebaseio.com/days");
		var fb = $firebase(ref);
	});
