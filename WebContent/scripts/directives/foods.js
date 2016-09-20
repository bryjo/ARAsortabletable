angular.module('SortableTable')
.directive('foods'), function() {
	return{
		templateUrl: 'templates/foods.html',
		controller: 'foodCtrl',
		replace: true
	};
};