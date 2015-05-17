'use strict';

var React = require('react/addons');

require('styles/Header.scss');

var Header = React.createClass({

  render: function () {
    return (
        <header>
        	<h1>Spot Mark</h1>
        </header>
      );
  }
});

module.exports = Header; 

