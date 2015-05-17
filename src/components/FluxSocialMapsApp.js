'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./Header');

// CSS
require('normalize.css');
require('../styles/variables.scss');
require('../styles/main.css');

var FluxSocialMapsApp = React.createClass({
  render: function() {
    return (
    	<div className="inner-content">
    		<Header />
    		<RouteHandler />
    	</div>
    );
  }
});

module.exports = FluxSocialMapsApp;
