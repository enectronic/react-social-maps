'use strict';

var React = require('react/addons');
var Loading = require('./Loading');
var FormHelper = require('../utils/FormHelper');
var FindMeActionCreators = require('../actions/FindMeActionCreators');

require('styles/FindMyLocation.scss');

var FindMyLocation = React.createClass({

  mixins: [FormHelper],

  getInitialState: function () {
      return {
          loading: false
      };
  },

  getLocationBeforeSubmit: function() {
    this.setState({ loading: true });

    if ( this.hasGeolocation() ) {
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
      this.setState({ loading: false });
    }
  },

  onSubmit: function(location) {
    var coords = {
      lat: location.coords.latitude,
      lng: location.coords.longitude
    };

    FindMeActionCreators.locate(location.coords);
    this.setState({ loading: false });
  },

  onSubmitError: function(err) {
    // Handle errors
    console.warn(err);
    this.setState({ loading: false });
  },

  render: function () {
    var textOrLoading = this.state.loading ? <Loading /> : 'Find my location';
    return (
        <div className="find-me-container">
          <div className="container-960">
            <div className="find-me">
              <button
                className="find-me__button"
                onClick={this.getLocationBeforeSubmit}
              >
                {textOrLoading}
              </button>
            </div>
          </div>
        </div>
      );
  }
});

module.exports = FindMyLocation;

