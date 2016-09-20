angular.module('SortableTable')
.directive('svgDArrow', function() {
	return {
		templateUrl: 'templates/svgDArrow.html',
		controller: 'sortCtrl',
		replace: true
	};
});