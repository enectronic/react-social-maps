'use strict';

var React = require('react/addons');


require('styles/Loading.scss');

var interval;

var Loading = React.createClass({

	getInitialState: function() {
		return {
			text: 'Loading',
			loadingDots: ''
		};
	},

	componentDidMount: function() {
		interval = setInterval(this.updateText, 500);
	},

	componentWillUnmount: function() {
		clearInterval(interval);
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

