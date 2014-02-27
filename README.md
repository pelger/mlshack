# SolidEarth MLS Example

## Installing node
Go to http://nodejs.org and download the binary for your platform. Installing node will also install npm.

## Example application

### Install global modules 
Yoeman:

	$npm install -g yo

Grunt:

	$npm install -g grunt-cli

Bower:

	$npm install -g bower

Angular fullstack generator:

	$npm install -g generator-angular-fullstack

### Step 1 - generate

Create a directory for the applicaiton and generate it:

	mkdir ~/mlshack
	cd ~/mlshack
	yo angular-fullstack mlshack

Run it:

	grunt server

Check it out. Browse to http://localhost:9000 to view your generated application.

### Step 2 - hook up the API
Install the request module (request provides simplified http and https client services).

	$npm install request --save
	
Open the file ~/mlshack/lib/controllers/api.js. Add the line:

	var req = require('request');

Now add the function below to the same file



Open the file ~/mlshack/lib/routes.js and add the line:

	app.get('/api/listings', api.listings);

Run it:

	$grunt server

Check it out. Navigate to http://localhost:9000/api/listings. This should now display the raw data from your MLS query. Congratulations you have successfully fetched MLS data using node.js and express.

### Step 3 - Do something with the data

Create a file ~/mlshack/app/scripts/controllers/listings.js. Add the following code to the file:

	'use strict';

	angular.module('mlshackApp').controller('ListingsCtrl', function ($scope, $http) {

		$scope.formatAddress = function(listing) {
    		var address = listing.address;
    		return address.number + ' ' + address.name + ' ' + address.suffix + ' ' + address.city + ' ' + address.zip;
    	};

		$http.get('/api/listings').success(function(listings) {
    		$scope.listings = listings;
    	});
	});


Create a file ~/mlshack/app/views/partials/listings.html. Add the following templatized markup

	<div ng-include="'partials/navbar'"></div>

	<div class="row marketing">
      <h4>Address</h4>
      <div ng-repeat="listing in listings">
        <p>{{formatAddress(listing)}}</p>
      </div>
    </div>

    <div class="footer">
      <p>♥ from nearForm</p>
    v</div>

Include the newly created angular controller in index.html between the build:js comment markers

        <script src="scripts/controllers/listings.js"></script>

Check it out. Browse to http://localhost:9000/listings, You shoud now see some address listing data formatted in the page. Congratulations you now have a running MEAN stack application that is fetching and rendering MLS data in a single page.


### Step 4 - Go create your onw Awesomeness
