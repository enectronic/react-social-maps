// Simple header that includes a heading and
// our InfoBox component.

'use strict';

var React = require('react/addons');
var InfoBox = require('./InfoBox');

require('styles/Header.scss');

var Header = React.createClass({

  render: function () {
    return (
        <header>
        	<div className="container-960 table">
	        	<div className="logo">
	        		<h1>Spot Mark</h1>
	        	</div>

	        	<InfoBox />
        	</div>
        </header>
      );
  }
});

module.exports = Header;

