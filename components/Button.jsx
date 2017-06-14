'use strict';

var React = require('react');
var PropTypes = require('prop-types');

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    return (
      <button className="btn btn--primary" type="button" onClick={this.handleClick}>{this.props.value}</button>
    );
  }
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  value: 'Send',
  onClick: null
};

module.exports = Button;