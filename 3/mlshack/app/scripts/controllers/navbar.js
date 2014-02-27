'use strict';

angular.module('mlshackApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Listings',
      'link': '/listings'
    }
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
