'use strict'

angular.module('SortableTable')

	.service('dataService', function($http) {				//the service is looking for the local file foods.json in the practice folder. Foods.json contains the entire array
		this.getFoods = function(callback) {				//of foods listed below in "foodArray". The reason I did this is to simulate an actual RESTful request to an actual server
			$http.get('model/foods.json')					//containing all of the data within a controlled database. I am new to Angular but I doubt the entire
			.then(callback)									//set of data would exist embedded in the controller file. The problem is the local file does not render when this .get() is made
		}													//instead of providing messy/hacked code as a workaround I am explaining my solution as it would perform with a running, local server		
		
		this.deleteFood = function(food) {
			console.log(food.name + " was deleted");		//imitating the communication with a database to delete actual data
		};
		
		this.saveFoods = function(food) {
			console.log(food.length + " all foods saved");	//again imitating the communication with a database
		};													//saving all Foods at once
	});