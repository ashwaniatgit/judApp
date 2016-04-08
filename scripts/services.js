// create the service judApp
judApp.service('stateService', function($http)
{
    var data = $http.get('data/state.json');

    this.getstates = function()
    {
        return data;
    }
})

.controller("stateCtrl", function ($scope, stateService)
{
    var promise = stateService.getstates();
    promise.then(function (data)
    {
        $scope.state = data.data;
        //console.log($scope.state);
    });
})