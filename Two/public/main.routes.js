angular.module("SampleCenterTypes").config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/samplecentertypes', {
            templateUrl: 'samplecentertype.html',
            controller: 'MainController'
        });

        $locationProvider.html5Mode(true);
    }]);