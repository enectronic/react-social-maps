'use strict';

describe('SocialMapsView', function () {
  var React = require('react/addons');
  var SocialMapsView, component;

  beforeEach(function () {
    SocialMapsView = require('components/SocialMapsView.js');
    component = React.createElement(SocialMapsView);
  });

  it('should create a new instance of SocialMapsView', function () {
    expect(component).toBeDefined();
  });
});
