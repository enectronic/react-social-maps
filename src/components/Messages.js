'use strict';

var React = require('react/addons');
var MessagesStore = require('../stores/MessagesStore');

require('styles/Messages.scss');

function getMessagesFromStore() {
	return {
		messages: MessagesStore.getAll()
	};
}

var Messages = React.createClass({

	onChange: function() {
		this.setState(getMessagesFromStore());
	},

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

  	var messages = this.state.messages.map(function(message, idx) {
  		return (
  			<p key={'message-'+idx} className="message">{message}</p>
  		);
  	});

    return (
        <div>
          {messages}
        </div>
      );
  }
});

module.exports = Messages; 

