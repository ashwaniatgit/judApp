// create the module and name it judApp
        // also include ngRoute for all our routing needs
    var judApp = angular.module('judApp', ['ngRoute']);

    // configure our routes
    judApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        // route for the Delhi page
            .when('/delhi', {
                templateUrl : 'views/delhi.html',
                controller  : 'delhiCtrl'
            })
            // route for the Mumbai page
            .when('/mumbai', {
                templateUrl : 'views/mumbai.html',
                controller  : 'mumbaiCtrl'
            })

            // route for the Rajasthan page
            .when('/rajasthan', {
                templateUrl : 'views/rajasthan.html',
                controller  : 'rajCtrl'
            })

            // route for the UP page
            .when('/up', {
                templateUrl : 'views/up.html',
                controller  : 'upCtrl'
            });
    }]);

    
    // create the controller and inject Angular's $scope
    judApp.controller('delhiCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'You Are in Delhi';
    });

    judApp.controller('mumbaiCtrl', function($scope) {
        $scope.message = 'You Are in Mumbai';
    });

    judApp.controller('rajCtrl', function($scope) {
        $scope.message = 'You are in Rajasthan';
    });

    judApp.controller('upCtrl', function($scope) {
        $scope.message = 'You are in Up.';
    });