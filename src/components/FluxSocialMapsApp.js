'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// CSS
require('normalize.css');
require('../styles/main.css');

var FluxSocialMapsApp = React.createClass({
  render: function() {
    return (
      	<RouteHandler />
    );
  }
});

module.exports = FluxSocialMapsApp;
