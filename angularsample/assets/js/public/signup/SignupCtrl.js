angular.module('SignupMod').controller('SignupCtrl',['$scope', '$http', function($scope, $http){
    console.log('Signup Controller initialized');

    $scope.runSignup = function(){
    	console.log('Signing up '+$scope.name);

    	//submit to sails server
    	$http.post('/signup', {
    		name: $scope.name,
    		email: $scope.email,
    		password: $scope.password
    	})
    	.then(function onSuccess(response){
            window.location = '/login'
    	})
    	.catch(function onError(err){
    		console.log('Error: '+err);
    	})
    }
}])
