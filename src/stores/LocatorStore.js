// The locator store takes care of the users current position.
// It initially gets a value (hard coded into getInitialState
// of StatusMap.js).

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
      pos = { lat: action.coords.lat, lng: action.coords.lng };
      break;

    default:
      return true;
  }

  LocatorStore.emit('change_location');
  return true;

});

module.exports = LocatorStore;
