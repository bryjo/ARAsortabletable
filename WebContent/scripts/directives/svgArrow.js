angular.module('SortableTable')
.directive('svgArrow', function() {
	return {
		templateUrl: 'templates/svgArrow.html',
		controller: 'sortCtrl',
			replace: true
	};
});