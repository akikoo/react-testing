'use strict';

var React = require('react/addons');
var expect = require('unexpected');
var ReactTestUtils = React.addons.TestUtils;
var sinon = require('sinon');

var ButtonComponent = require('../components/Button');

describe('ButtonComponent', () => {
  it('Should render a button element', () => {
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);
    expect(React.findDOMNode(instance).nodeName, 'to be', 'BUTTON');
  });

  it('Should render a button element with button classes', () => {
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);
    expect(React.findDOMNode(instance).className, 'to contain', 'btn btn--primary');
  });

  it('<button> should be of type "button"', () => {
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);
    expect(React.findDOMNode(instance).getAttribute('type'), 'to be', 'button');
  });

  it('Should contain a value', () => {
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);
    expect(React.findDOMNode(instance).innerHTML, 'to be', 'Send');
  });
});