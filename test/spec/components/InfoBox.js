'use strict';

describe('InfoBox', function () {
  var React = require('react/addons');
  var InfoBox, component;

  beforeEach(function () {
    InfoBox = require('components/InfoBox.js');
    component = React.createElement(InfoBox);
  });

  it('should create a new instance of InfoBox', function () {
    expect(component).toBeDefined();
  });
});
