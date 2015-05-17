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

  renderMarkersText: function() {
    var text = this.state.markers.length === 1 ? ' marker ' : ' markers ';

    return (
      'There are currently ' + this.state.markers.length + text + 'on the map!'
    );
  },

  render: function () {
    return (
        <div className="info-box">
          <p>{this.renderMarkersText()}</p>
        </div>
      );
  }
});

module.exports = InfoBox;

