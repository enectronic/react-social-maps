'use strict';

var React = require('react/addons');
var FormHelper = require('../utils/FormHelper');
var FormActionCreators = require('../actions/FormActionCreators');

require('styles/AddStatusForm.scss');

var AddStatusForm = React.createClass({

	getLocationBeforeSubmit: function() {
		if ( FormHelper.hasGeolocation ) {
			var options = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			};

			navigator.geolocation.getCurrentPosition(
				this.onSubmit, 
				this.onSubmitError,
				options
			);
		} else {
			// Send an action to add a message
			// saying that you need geolocation
			// in order to submit this form
			console.log('said no..');
		}
	},

	onSubmit: function(position) {
		var textNode = this.refs.status.getDOMNode();
		var text = textNode.value;
		textNode.value = '';
		var coords = { lat: position.coords.latitude, lng: position.coords.longitude };

		var status = {
			status: text,
			coords: coords
		};
		
		FormActionCreators.addStatus(status);
	},

	onSubmitError: function(err) {
		// Something went wrong while getting the geolocation.
		console.warn('ERROR(' + err.code + '): ' + err.message);
		switch ( err.code ) {
			case 1: // User denied geolocation
				// Create a new message for the user to inform
				// that she needs to accept geolocation in order
				// to use SocialMaps.
				break;

			default:
				break;
		}
	},

  render: function () {
    return (
      <div className="form">
      	<input type="text" ref="status" placeholder="Tell me what's up!" />
      	<button onClick={this.getLocationBeforeSubmit}>Tell the world</button>
      </div>
  	);
  }
});

module.exports = AddStatusForm; 

