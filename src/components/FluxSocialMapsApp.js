'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./Header');

// CSS
require('normalize.css');
require('../styles/main.css');

var FluxSocialMapsApp = React.createClass({
  render: function() {
    return (
    	<div>
    		<Header />
      		<RouteHandler />
      	</div>
    );
  }
});

module.exports = FluxSocialMapsApp;
