'use strict';

var React = require('react/addons');
var GoogleMapsLoader = require('google-maps');
var MarkerStore = require('../stores/MarkersStore');
var LocatorStore = require('../stores/LocatorStore');

require('styles/StatusMap.scss');

function getMarkersFromStore() {
		return MarkerStore.getAll();
}

function getLocationFromStore() {
  return {
    location: LocatorStore.getLocation()
  };
}

var map;
function loadGoogleMap(coords, callback) {

  var mapOptions = {
    center: { lat: coords.lat, lng: coords.lng },
    zoom: 12
  };

  GoogleMapsLoader.load(function(google) {
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  });

  if (callback) {
    callback();
  }
}

var StatusMap = React.createClass({

	onChange: function() {
		this.setState(getMarkersFromStore());
    console.log(this.state);
		this.distributeMarkers();
	},

  onLocationChange: function() {
    this.setState(getLocationFromStore());
    loadGoogleMap(this.state.location, this.distributeMarkers);
  },

	distributeMarkers: function() {
		this.state.markers.map(function(marker) {

			/* jshint ignore:start */
			var latLng = new google.maps.LatLng(marker.coords.lat, marker.coords.lng);
			var mapMarker = new google.maps.Marker({
	      position: latLng,
	      map: map,
        icon: marker.party ? '../images/beer.png' : '',
	      animation: google.maps.Animation.DROP
	  	});

      var content = '<div class="panel">' +
        '<p class="panel__name">' + marker.name + ':</p>' +
        '<p class="panel__status">' + marker.status + '</p>' +
        '</div>';

      var panel = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(mapMarker, 'click', function() {
        panel.open(map, mapMarker);
      });
	  	/* jshint ignore:end */
		});
	},

	getInitialState: function() {
		return {
      markers: getMarkersFromStore(),
      location: {
        lat: 33.57,
        lng: 86.75
      }
    };
	},

	componentWillUnmount: function() {
		MarkerStore.removeChangeListener(this.onChange);
    LocatorStore.removechangeListener(this.onLocationChange);
	},

	componentWillMount: function() {
		MarkerStore.addChangeListener(this.onChange);
    LocatorStore.addChangeListener(this.onLocationChange);
    loadGoogleMap(this.state.location, this.distributeMarkers);
	},

  render: function () {

    return (
    		<div>
	        <div id="map" className="map">
	          {/* Google Map is rendered here */}
	        </div>
        </div>
      );
  }
});

module.exports = StatusMap;

