// This component is the top right text showing
// the user how many markers are currently on
// the map.

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

  // Self written methods
	onChange: function() {
		this.setState(getMarkersFromStore());
	},

  renderMarkersText: function() {
    var text = this.state.markers.length === 1 ? ' marker ' : ' markers ';

    return (
      'There are currently ' + this.state.markers.length + text + 'on the map!'
    );
  },

  // React's own methods
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
          <p>{this.renderMarkersText()}</p>
        </div>
      );
  }
});

module.exports = InfoBox;

