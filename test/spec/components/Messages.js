'use strict';

describe('Messages', function () {
  var React = require('react/addons');
  var Messages, component;

  beforeEach(function () {
    Messages = require('components/Messages.js');
    component = React.createElement(Messages);
  });

  it('should create a new instance of Messages', function () {
    expect(component).toBeDefined();
  });
});
