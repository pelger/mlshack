'use strict';

angular.module('mlshackApp').controller('ListingsCtrl', function ($scope, $http) {

  $scope.formatAddress = function(listing) {
    var address = listing.Location.address;
    return address.StreetNumber + ' ' + address.StreetName + ' ' + address.City + ' ' + address.PostalCode;
  };

  $http.get('/api/listings').success(function(listings) {
    $scope.listings = listings.listing;
  });
});
