
var login = angular.module('LoginApp',[]);

login.controller('loginController', ['$scope', function($scope) {

    $scope.clicked = function(){
        window.location = '#/DoctorHome.html';
    }

    $scope.add = function () {
        window.location = '#/DoctorHome2.html';
    }

}])