angular.module("myApp", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl : 'app/home.html',
      // controller :  'calculator as app'
      controller : 'Calculator as app'
    })
    .when('/meal', {
      templateUrl: 'app/meal.html',
      controller : 'MealCtrl'
    })
    .when('/earnings', {
      templateUrl: 'app/earnings.html',
      controller : 'EarnCtrl'
    })
  }])
  .controller('HomeCtrl', function($scope) {

  })
  .controller('MealCtrl', function ($scope) {

  })
  .controller('EarnCtrl', function ($scope) {

  })
 .controller('Calculator', function(){

  this.mealCount = 0;
  this.tipT = 0;
  this.avgTip = 0;
  this.fade = false;


  this.addTip = function (price, tax, tip) {
    // this.price = document.getElementById('price').value;
    // this.tax = document.getElementById('tax').value;
    // this.tipP = 7;
// parseFloat
    tax = tax * 0.01;
    tip = tip * 0.01;
    console.log(tax, tip);
    this.subtotal = price * (1 + tax);
    this.tip = this.subtotal * tip;

    // tax & tip would be number * 0.01 would give %
    this.total = this.subtotal + this.tip;
    this.mealCount++;
    this.tipT += this.tip;
    this.avgTip = this.tipT/this.mealCount;
 };
 this.resetForm = function ( ) {
     this.price = "";
     this.tax = "";
     this.tipP = "";
     this.subtotal = "";
     this.tip = ""
     this.tipT = "";
     this.total = "";
     this.mealCount = 0;
     this.avgTip = "";
 };
 this.cancel = function () {

   this.price = "";
   this.tax = "";
   this.tipP = "";
 };
    //  console.log (50 *0.07);
    //  alert(this.subtotal);
 })
 .run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$routeChangeError', function() {
    $location.path("/error");
  });
  $rootScope.$on('routeChangeStart', function() {
    $rootScope.isLoading = true;
  });
  $rootScope.$on('$routeChangeSuccess', function () {
    $timeout(function () {
      $rootScope.isLoading = false;
    }, 1000);
  });
})
