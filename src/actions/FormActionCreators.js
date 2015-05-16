'use strict';

var AppDispatcher = require('../dispatcher/FluxSocialMapsAppDispatcher');

var FormActionCreators = {

	addStatus: function(status) {
		console.log(status);
		var action = {
			actionType: 'ADD_STATUS',
			status: status
		};

		AppDispatcher.dispatch(action);
	}

};

module.exports = FormActionCreators; 
