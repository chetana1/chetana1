let myApp = angular.module('myApp', [])
    .controller('MyController', ['$scope', '$http', function ($scope, $http) {

        $http.get('json/clients.json').then(function (response) {
            $scope.clientObj = response.data;
        });
        
        $scope.setTheme = function(themeName){
            document.documentElement.className = themeName;
        }

        $scope.setTheme('theme-light')

        $scope.toggleTheme = function (theme) {
            if (theme === 'dark') {
                $scope.setTheme('theme-dark')
            } else {
                $scope.setTheme('theme-light')
            }
        }

        $scope.formObj = {
            newPassword: '',
            repeatPassword: '',
        }
        $scope.passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/gm;

        $scope.checkPassword = function (data) {
            if ($scope.validatePassword(data)) {
                let password = data.newPassword
                let result = $scope.passwordPattern.test(password)
                result ? alert("Password Changed!") : alert("Password is not strong! It should have atleast one number, lowercase & uppercase, minimum lenght is 6");

            }

        }

        $scope.validatePassword = function (data) {
            if (data.newPassword == '')
                alert("Please enter Password");
            else if (data.repeatPassword == '')
                alert("Please enter repeat password");
            else if (data.newPassword != data.repeatPassword) {
                alert("\nPassword did not match: Please try again...")
                return false;
            } else
                return true;
        }
    }]);