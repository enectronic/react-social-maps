'use strict';

var React = require('react/addons');


require('styles/Loading.scss');

var Loading = React.createClass({

	getInitialState: function() {
		return {
			text: 'Loading',
			loadingDots: ''
		};
	},

	componentDidMount: function() {
		var interval = setInterval(this.updateText, 500);
	},

	updateText: function() {
		var currentText = this.state.text;
		if ( this.state.loadingDots.length < 3 ) {
			this.setState({
				loadingDots: this.state.loadingDots + '.'
			});
		} else {
			this.setState({
				loadingDots: ''
			});
		}
	},

  render: function () {
    return (
        <span>{this.state.text + this.state.loadingDots}</span>
      );
  }
});

module.exports = Loading; 

