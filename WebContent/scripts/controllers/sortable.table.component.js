var sortableTable = angular.module("SortableTable", [])

sortableTable.controller("sortableTableCtrl", sortableTableCtrl); 	//used the typical naming conventions of "Ctrl"

sortableTableCtrl.$inject = ["$scope"];

function sortableTableCtrl($scope) {
    
	$scope.foodArray = [ //this entire Array would be located in a separate .json file which I included called "foods.json"
        {name: "banana", type: "fruit", price: "$1.00", unit: "bundle", stock: 2, demand: 4, need: 2},
        {name: "hamburger", type: "meat", price: "$3.99", unit: "pound", stock: 1, demand: 7, need: 6},
      /*{name: "milk", type: "dairy", price: "$1.99", unit: "gallon", stock: 0, demand: 2, need: 2}, removed duplicate "milk" record*/
        {name: "bread", type: "grain", price: "$0.99", unit: "loaf", stock: 0, demand: 4, need: 4},
        {name: "milk", type: "dairy", price: "$1.99", unit: "gallon", stock: 0, demand: 2, need: 2},
        {name: "cheese", type: "dairy", price: "$3.99", unit: "pound", stock: 0, demand: 1, need: 1},
        {name: "coffee", type: "caffeine", price: "$10.99", unit: "pound", stock: 0, demand: 2, need: 2},
        {name: "yogurt", type: "dairy", price: "$0.99", unit: "container", stock: 0, demand: 2, need: 2},
        {name: "cereal", type: "grain", price: "$2.99", unit: "box", stock: 0, demand: 1, need: 1},
        {name: "sausage", type: "meat", price: "$1.99", unit: "gallon", stock: 0, demand: 2, need: 2},
        {name: "chicken", type: "meat", price: "$1.99", unit: "pound", stock: 1, demand: 2, need: 1},
        {name: "carrots", type: "vegetable", price: "$0.49", unit: "pound", stock: 0, demand: 4, need: 4},
        {name: "corn", type: "vegetable", price: "$0.99", unit: "ear", stock: 3, demand: 4, need: 1},
        {name: "potatoes", type: "vegetable", price: "$1.99", unit: "pound", stock: 2, demand: 2, need: 0},
        {name: "red bull", type: "caffeine", price: "$1.99", unit: "can", stock: 1, demand: 2, need: 1},
        {name: "peas", type: "vegetable", price: "$1.99", unit: "pound", stock: 0, demand: 1, need: 1},
        {name: "green chili", type: "vegetable", price: "$0.99", unit: "pound", stock: 1, demand: 3, need: 2}, //misspelled word "chili"
        {name: "jalapenos", type: "vegetable", price: "$0.99", unit: "pound", stock: 1, demand: 2, need: 1}, //misspelled work "jalapenos"
        {name: "tomatoes", type: "vegetable", price: "$1.99", unit: "pound", stock: 1, demand: 2, need: 1},
        {name: "ramen", type: "grain", price: "$0.29", unit: "pound", stock: 2, demand: 2, need: 0},
        {name: "spaghetti noodles", type: "grain", price: "$0.99", unit: "pound", stock: 0, demand: 2, need: 2}, //misspelled word "spaghetti"
        {name: "tortillas", type: "grain", price: "$1.99", unit: "pound", stock: 0, demand: 2, need: 2}
    ];
    
	$scope.name = {asc: true};
    $scope.type = {asc: true};
    $scope.price = {asc: true};
    $scope.unit = {asc: true};
    $scope.stock = {asc: true};
    $scope.demand = {asc: true};
    $scope.need = {asc: true};
    
    $scope.predicate = "type";
    
    $scope.order = function(predicate) {
        $scope.predicate = predicate;
    };
}