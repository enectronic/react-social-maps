'use strict';

describe('Loading', function () {
  var React = require('react/addons');
  var Loading, component;

  beforeEach(function () {
    Loading = require('components/Loading.js');
    component = React.createElement(Loading);
  });

  it('should create a new instance of Loading', function () {
    expect(component).toBeDefined();
  });
});
