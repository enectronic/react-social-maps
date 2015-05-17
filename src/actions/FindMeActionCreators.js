'use strict';

var AppDispatcher = require('../dispatcher/FluxSocialMapsAppDispatcher');

var FindMeActionCreators = {
  locate: function(coords) {
    var action = {
      actionType: 'LOCATE_USER',
      coords: coords
    };

    AppDispatcher.dispatch(action);
  }
};

module.exports = FindMeActionCreators;
