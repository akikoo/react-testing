'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Button = React.createClass({
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

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

module.exports = Button;
