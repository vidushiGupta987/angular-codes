//IIFE
(function(){
    'use-strict';
    //application module
    let app= angular.module('angularTable' , []);
    //controller module
    app.controller('tableCtrl', function($scope){
        $scope.query = {}
  $scope.queryBy= "$"
    var employee = [{
        name: "Martin",
        email: "martin@patientbond.com",
        phone: "1234567890",
       image: "fas fa-male",
        age: "24"
      }, {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: "456745678",
        image: "fas fa-male",
        age: "22"
      }, {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: "3435344535",
        image: "fas fa-male",
        age:"21"
      }, {
        name: "Alex",
        email: "alex@hotmail.com",
       phone: "0987654321",
       image: "fas fa-male",
        age:"23"
      }, {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: "6754890876",
        image: "fas fa-female",
        age: "23"
      }, ];
  
      $scope.employees = employee;            
                      
    });
  
    
})();