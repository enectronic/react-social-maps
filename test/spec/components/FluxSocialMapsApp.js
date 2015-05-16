'use strict';

describe('FluxSocialMapsApp', function () {
  var React = require('react/addons');
  var FluxSocialMapsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    FluxSocialMapsApp = require('components/FluxSocialMapsApp.js');
    component = React.createElement(FluxSocialMapsApp);
  });

  it('should create a new instance of FluxSocialMapsApp', function () {
    expect(component).toBeDefined();
  });
});
