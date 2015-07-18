'use strict';

var React = require('react');

var Button = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      type: 'button',
      value: 'Send',
      onClick: null
    };
  },

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  },

  render() {
    return (
      <button className="btn btn--primary" type="button" onClick={this.handleClick}>{this.props.value}</button>
    );
  }
});

module.exports = Button;
