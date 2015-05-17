'use strict';

var AppDispatcher = require('../dispatcher/FluxSocialMapsAppDispatcher');

var FormActionCreators = {

	// Adds a status marker to the map
	addStatus: function(status) {
		var action = {
			actionType: 'ADD_STATUS',
			status: status
		};

		AppDispatcher.dispatch(action);
	},

	// Sends a feedback message so that the client know
	// that something went wrong, and what that was.
	feedbackMessage: function(message) {
		var action = {
			actionType: 'FEEDBACK_MESSAGE',
			message: message
		};

		AppDispatcher.dispatch(action);
	},

	clearFeedbackMessages: function() {
		var action = {
			actionType: 'FEEDBACK_CLEAR'
		};

		AppDispatcher.dispatch(action);
	}

};

module.exports = FormActionCreators; 
