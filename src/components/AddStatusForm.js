'use strict';

var React = require('react/addons');
var FormHelper = require('../utils/FormHelper');
var FormActionCreators = require('../actions/FormActionCreators');
var Loading = require('./Loading');
var Messages = require('./Messages');

require('styles/AddStatusForm.scss');

var AddStatusForm = React.createClass({

	getInitialState: function() {
		return {
			loading: false
		};
	},

	getLocationBeforeSubmit: function() {
		FormActionCreators.clearFeedbackMessages();
		this.setState({ loading: true });

		if ( FormHelper.hasGeolocation() ) {
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
			// Send an action to add a message for the client
			FormActionCreators.feedbackMessage('You need a browser that supports geolocation in order to use this web app.');
		}
	},

	componentDidMount: function() {
		this.refs.name.getDOMNode().focus();
	},

	onSubmit: function(position) {
    var errors = [];
		if ( this.refs.status.getDOMNode().value.trim() === '' ) {
			// Append an error message before returning.
			errors.push('You need to write something');
			this.setState({ loading: false });
		}

    if ( this.refs.name.getDOMNode().value.trim() === '' ) {
      errors.push('I wanna know your name');
      this.setState({ loading: false });
    }

    // If any errors were catched, send an action and return
    if ( errors.length ) {
      errors.map(function(error) {
        FormActionCreators.feedbackMessage(error);
      });
      return;
    }

    var name = this.refs.name.getDOMNode().value;
		var textNode = this.refs.status.getDOMNode();
		var text = textNode.value;

		textNode.value = '';
		var coords = { lat: position.coords.latitude, lng: position.coords.longitude };

		var status = {
      name: name,
			status: text,
			coords: coords
		};

		FormActionCreators.addStatus(status);
		this.setState({ loading: false });
    this.refs.status.getDOMNode().focus();
	},

	onSubmitError: function(err) {
		// Something went wrong while getting the geolocation.
		switch ( err.code ) {
			case 1: // User denied geolocation
				// Create a new message for the user to inform
				// that she needs to accept geolocation in order
				// to use SocialMaps.
				FormActionCreators.feedbackMessage('You need to allow us to fetch your position.');
				break;

			default:
				FormActionCreators.feedbackMessage('Something went wrong');
				break;
		}

		this.setState({loading: false});
	},

  render: function () {

  	var loading = this.state.loading ? <Loading /> : 'Tell the world';

    return (
    	<div className="form-container">
    		<div className="container-960">
		      <div className="form">
		      	<input
              type="text"
              ref="name"
              placeholder="Hey! Your name please."
              className="form__text"
            />
            <input
		      		type="text"
		      		ref="status"
		      		placeholder="Tell me what's up!"
		      		className="form__text"
		      	/>
		      	<button
		      		className="form__button"
		      		onClick={this.getLocationBeforeSubmit}
		      	>
		      		{loading}
		      	</button>
		      	<Messages />
		      </div>
	      </div>
      </div>
  	);
  }
});

module.exports = AddStatusForm;

