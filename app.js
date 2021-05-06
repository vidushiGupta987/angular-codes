(function(){
    'use-strict';
    let app= angular.module('angularTable' , []);
    app.controller('tableCtrl', function($scope){
        $scope.query = {}
  $scope.queryBy= "$"
    var employee = [{
        name: "Martin",
        email: "martin@patientbond.com",
        phone: "1234567890",
        gender: "male",
        age: "24"
      }, {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: "456745678",
        gender: "male",
        age: "22"
      }, {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: "3435344535",
        gender: "male",
        age:"21"
      }, {
        name: "Alex",
        email: "alex@hotmail.com",
       phone: "0987654321",
        gender: "Male",
        age:"23"
      }, {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: "6754890876",
        gender: "female",
        age: "23"
      }, ];
  
      $scope.employees = employee;            
                      
    });
  
    
})();