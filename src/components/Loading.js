// Simple loading component. Essentially
// just a GIF that we can show when an action
// such as navigator.geolocation methods takes
// time fetching data.

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

