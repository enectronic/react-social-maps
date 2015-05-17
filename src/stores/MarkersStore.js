'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var FluxSocialMapsAppDispatcher = require('../dispatcher/FluxSocialMapsAppDispatcher');

var markers = [];

var MarkersStore = assign({}, EventEmitter.prototype, {

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
		return markers;
	}

});

MarkersStore.dispatchToken = FluxSocialMapsAppDispatcher.register(function(action) {

  switch(action.actionType) {
  	case 'ADD_STATUS':
  		markers.push(action.status);
  		break;

    default:
      return true;
  }

  MarkersStore.emitChange();
  return true;
});

module.exports = MarkersStore;
