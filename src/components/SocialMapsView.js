'use strict';

var React = require('react');
var AddStatusForm = require('./AddStatusForm');
var StatusMap = require('./StatusMap');
var Messages = require('./Messages');

require('styles/SocialMapsView.scss');

var SocialMapsView = React.createClass({

  render: function () {
    return (
        <div>
        	<Messages />
        	<StatusMap />
          	<AddStatusForm />
        </div>
      );
  }
});

module.exports = SocialMapsView; 

