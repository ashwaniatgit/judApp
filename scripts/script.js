// create the module and name it judApp
        // also include ngRoute for all our routing needs
    var judApp = angular.module('judApp', ['ngRoute']);

    // configure our routes
    judApp.config(['$routeProvider', function($routeProvider, $locationProvider) {
        console.log("route");
        $routeProvider
        // set route for dynamic page
        .when('/:pagename',
        {
            controller:'routeCtrl',
            templateUrl: 'views/uirouter.html'

        })// if not match with any route config then send to home page
        .otherwise({
            redirectTo: '/'
        });

    }]);

    
    // create the controller and inject Angular's $scope
    judApp.controller('routeCtrl', function($scope, $routeParams) {
        // create a message to display in our view
        $scope.page=$routeParams.pagename;
        $scope.message = "(',')---I am on "+$routeParams.pagename +" page---(',')";
    });

    
