// This component is essentially a layout component
// composed by other, more dynamically functioning
// child components.

'use strict';

var React = require('react');
var AddStatusForm = require('./AddStatusForm');
var StatusMap = require('./StatusMap');
var Messages = require('./Messages');
var FindMyLocation = require('./FindMyLocation');

require('styles/SocialMapsView.scss');

var SocialMapsView = React.createClass({

  render: function () {
    return (
        <div>
        	<StatusMap />
        	<AddStatusForm />
          <FindMyLocation />
        </div>
      );
  }
});

module.exports = SocialMapsView;

