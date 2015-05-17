'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var FluxSocialMapsAppDispatcher = require('../dispatcher/FluxSocialMapsAppDispatcher');

var messages = [];

var MessagesStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},

	getAll: function() {
		return messages;
	}

});

MessagesStore.dispatchToken = FluxSocialMapsAppDispatcher.register(function(action) {
	console.log(action);
  switch(action.actionType) {
  	case 'FEEDBACK_MESSAGE':
  		messages.push(action.message);
  		MessagesStore.emitChange();
  		break;

  	case 'FEEDBACK_CLEAR':
  		messages = [];
  		MessagesStore.emitChange();
  		break;
  		
    default:
  }

});

module.exports = MessagesStore; 
