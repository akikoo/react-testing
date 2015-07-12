'use strict';

var React = require('react');

var Button = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    value: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      type: 'button',
      value: 'Send'
    };
  },

  render() {
    return (
      <button className="btn btn--primary" type="button">{this.props.value}</button>
    );
  }
});

module.exports = Button;
