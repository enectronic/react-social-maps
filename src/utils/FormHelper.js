'use strict';

var FormHelper = {
	hasGetUserMedia: function() {
		return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
				  navigator.mozGetUserMedia || navigator.msGetUserMedia);
	},

	hasGeolocation: function() {
		return ("geolocation" in navigator);
	}
};

module.exports = FormHelper;