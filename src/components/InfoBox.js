'use strict';

var React = require('react/addons');
var MarkersStore = require('../stores/MarkersStore');

require('styles/InfoBox.scss');

function getMarkersFromStore() {
	return {
		markers: MarkersStore.getAll()
	};
}

var InfoBox = React.createClass({

	onChange: function() {
		this.setState(getMarkersFromStore());
	},

	getInitialState: function() {
		return getMarkersFromStore();
	},

	componentWillMount: function() {
		MarkersStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function() {
		MarkersStore.removeChangeListener(this.onChange);
	},

  render: function () {
    return (
        <div className="info-box">
          <p>There are currently {this.state.markers.length} markers on the map!</p>
        </div>
      );
  }
});

module.exports = InfoBox; 

