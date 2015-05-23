'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var MessagesStore = require('../stores/MessagesStore');

require('styles/Messages.scss');

function getMessagesFromStore() {
	return {
		messages: MessagesStore.getAll()
	};
}

var Messages = React.createClass({

  // Self written methods
	onChange: function() {
		this.setState(getMessagesFromStore());
	},

  // React's methods
	getInitialState: function() {
		return getMessagesFromStore();
	},

	componentWillMount: function() {
		MessagesStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function() {
		MessagesStore.removeChangeListener(this.onChange);
	},

  render: function () {
    // Map each message to a <p> tag
  	var messages = this.state.messages.map(function(message, idx) {
  		return (
  			<p key={'message-'+idx} className="message">{message}</p>
  		);
  	});

    return (
        <div>
          <ReactCSSTransitionGroup transitionName="fade-in">
            {messages}
          </ReactCSSTransitionGroup>
        </div>
      );
  }
});

module.exports = Messages;

