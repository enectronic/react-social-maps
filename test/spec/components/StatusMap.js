'use strict';

describe('StatusMap', function () {
  var React = require('react/addons');
  var StatusMap, component;

  beforeEach(function () {
    StatusMap = require('components/StatusMap.js');
    component = React.createElement(StatusMap);
  });

  it('should create a new instance of StatusMap', function () {
    expect(component).toBeDefined();
  });
});
