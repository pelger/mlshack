'use strict';

var request = require('request');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};



/**
 * get example listing data
 */
exports.listings = function(req, res) {
  request('https://api.solidearth.com/sandbox/v1/search/baarmls?MlsStatusin=Active&sortOption=ListPrice&class=Residential&page=0&format=json&api_key=9c2pk3rma6jzbf8v8ccsm6yy', 
          function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.json(JSON.parse(body));
    }
    else {
      res.send(500, {error: error});
    }
  });
};

