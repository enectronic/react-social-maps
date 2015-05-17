'use strict';

describe('FindMyLocation', function () {
  var React = require('react/addons');
  var FindMyLocation, component;

  beforeEach(function () {
    FindMyLocation = require('components/FindMyLocation.js');
    component = React.createElement(FindMyLocation);
  });

  it('should create a new instance of FindMyLocation', function () {
    expect(component).toBeDefined();
  });
});
