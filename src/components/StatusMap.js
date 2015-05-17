'use strict';

var React = require('react/addons');
var GoogleMapsLoader = require('google-maps');
var MarkerStore = require('../stores/MarkersStore');

require('styles/StatusMap.scss');

function getMarkersFromStore() {
	return {
		markers: MarkerStore.getAll()
	};
}

var map;

var StatusMap = React.createClass({

	onChange: function() {
		this.setState(getMarkersFromStore());
		this.distributeMarkers();
	},

	distributeMarkers: function() {
		this.state.markers.map(function(marker) {
			/* jshint ignore:start */
			var latLng = new google.maps.LatLng(marker.coords.lat, marker.coords.lng);
			new google.maps.Marker({
	      position: latLng,
	      map: map,
	      animation: google.maps.Animation.DROP,
	      icon: '../images/beer.png',
	      title: marker.status
	  	});
	  	/* jshint ignore:end */
		});
	},

	getInitialState: function() {
		return getMarkersFromStore();
	},

	componentWillUnmount: function() {
		MarkerStore.removeChangeListener(this.onChange);
	},

	componentWillMount: function() {
		
		MarkerStore.addChangeListener(this.onChange);

		var mapOptions = {
			center: { lat: 59.5226255, lng: 15.988099499999999 },
			zoom: 12
		};

		GoogleMapsLoader.load(function(google) {
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
		});
	},

  render: function () {
    return (
    		<div>
	        <div id="map" className="map">
	          {/* Google Map is rendered here */}
	        </div>
	        <p>
	        	Currently {this.state.markers.length} markers on the map!
	        </p>
        </div>
      );
  }
});

module.exports = StatusMap; 

