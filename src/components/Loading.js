'use strict';

var React = require('react/addons');

require('styles/Loading.scss');

var Loading = React.createClass({

  render: function () {
    return (
        <img src="../images/loader.gif" />
      );
  }
});

module.exports = Loading;

