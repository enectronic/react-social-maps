'use strict';

var React = require('react/addons');
var InfoBox = require('./InfoBox');

require('styles/Header.scss');

var Header = React.createClass({

  render: function () {
    return (
        <header>
        	<div className="logo">
        		<h1>Spot Mark</h1>
        	</div>

        	<InfoBox />
        </header>
      );
  }
});

module.exports = Header; 

