var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
  this.myLesson = "MainLesson";

  this.addLesson = function () {
    console.log('addLesson');
  };

  $scope.mainCtrl = this;
});

app.controller('firstCtrl', function () {
  this.myLesson = "FirstLesson";
});

app.controller('secondCtrl', function () {
  this.myLesson = "SecondLesson";
});
