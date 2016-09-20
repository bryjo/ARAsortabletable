'use strict';

angular.module('SortableTable')
.controller('foodCtrl', function($scope, dataService) { 	//this is my solution...I created a new controller with access to a service layer named "dataService"
															//the only task needed to update the UI is to .unshift the object into the $scope.foods Array
	$scope.addFood = function() {
		var food = {name: '', type: '', price: '', unit: '', stock: '', demand: '', need: ''};
		$scope.foods.unshift(food);							//used .unshift because this adds the new food to the top of the array instead of the end (like .push)
	};														//ng-repeat would render the array if I had a working server. The underlying UI is automatically refreshed when the data is updated 

	dataService.getFoods(function(response) {  				//here the dataService is supposed to reach out to a separate .json file and receive data.
		$scope.foods = response.data;						//Only problem is I am working locally and the .json file will not load without a running server or changing my browser
	});														//security settings. I did not want to provide a bunch of work-around messy code that does not resemble optimized

	$scope.deleteFood = function(food, $index) {			//from the service I created a deleteFood function and tied the function to the "Delete" ng-click
		dataService.deleteFood(food);						//on the "Delete" href in the HTML file. The $index parameter locates the current array item and deletes 1 record
		$scope.foods.splice($index, 1);						//located at the current index. This works until a refresh is performed because this application state does not persist
	};

	$scope.saveFoods = function() {
		var filteredFoods = $scope.foods.filter(function(food) {
			if(food.edited) {								//from the service I created a saveFoods function and tied the function to the "Save" ng-click
				return food;								//on the "Save" href in the table file. I created a variable called filteredFoods, because filter is an array filter method 
			};												//that will return a new array. The $scope.foods is an array that will be filtered into a new array containing items that have been edited 
		});													//The filter takes a callback function consisting of a single element of the array -"food."
		dataService.saveFoods(filteredFoods);						
	};
})

.controller('groupCtrl', function($scope) {
	$scope.foodGroups = ["fruit", "vegetable", "meat", "dairy", "grain", "caffeine"];
})

.controller('unitCtrl', function($scope) {
	$scope.foodUnits = ["bundle", "box", "can", "container", "ear", "gallon", "loaf", "pound"]; //created this additional drop down because many of the "Unit" inputs repeat, and this avoids redundant data entry
})

.controller('sortCtrl', function($scope) {

	$scope.sortByHeader = function(headerName) {
        switch (headerName) {
            case "name":
                $scope.name.asc = !$scope.name.asc;
                break;
            case "type":
                $scope.type.asc = !$scope.type.asc;
                break;
            case "price":
                $scope.price.asc = !$scope.price.asc;
                break;
            case "unit":
                $scope.unit.asc = !$scope.unit.asc;
                break;
            case "stock":
                $scope.stock.asc = !$scope.stock.asc;
                break;
            case "demand":
                $scope.demand.asc = !$scope.demand.asc;
                break;
            case "need":
                $scope.need.asc = !$scope.need.asc;
                break;
        }
        $scope.order(headerName);
    };
})