// Define the `lifescience api` module

var lapi = angular.module('lapi', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
lapi.controller('lapiController', function lapiController($scope) {
  $scope.projects = [
    {
      name: 'test',
      snippet: 'test snippet.'
    }, {
      name: 'test',
      snippet: 'test snippet.'
    }, {
      name: 'test',
      snippet: 'test snippet.'
    }
  ];

  $scope.preemptible = {
       value1 : '',
       value2 : '--preemptible'
  };
});
