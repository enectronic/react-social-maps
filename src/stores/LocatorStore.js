'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var FluxSocialMapsAppDispatcher = require('../dispatcher/FluxSocialMapsAppDispatcher');

var pos;

var LocatorStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('change_location');
  },

  addChangeListener: function(callback) {
    this.on('change_location', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change_location', callback);
  },

  getLocation: function() {
    return pos;
  }

});

LocatorStore.dispatchToken = FluxSocialMapsAppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'LOCATE_USER':
      // Locate
      pos = { lat: action.coords.latitude, lng: action.coords.longitude };
      break;

    default:
      return true;
  }

  LocatorStore.emit('change_location');
  return true;

});

module.exports = LocatorStore;
