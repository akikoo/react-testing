'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var sinon = require('sinon');
var expect = require('unexpected').clone();
var ButtonComponent = require('../components/Button');

expect.installPlugin(require('unexpected-sinon'));

describe('ButtonComponent', () => {
  it('should render a button element', () => {
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);
    expect(ReactDOM.findDOMNode(instance).nodeName, 'to be', 'BUTTON');
  });

  it('should have button class "btn"', () => {
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);
    expect(ReactDOM.findDOMNode(instance).className, 'to contain', 'btn');
  });

  it('should be of type "button"', () => {
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);
    expect(ReactDOM.findDOMNode(instance).getAttribute('type'), 'to be', 'button');
  });

  it('should contain a value', () => {
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);
    expect(ReactDOM.findDOMNode(instance).textContent, 'to be', 'Send');
  });

  it('should call onClick callback', () => {
    var callback = sinon.spy();
    var instance = ReactTestUtils.renderIntoDocument(<ButtonComponent value="Send" onClick={callback} />);
    var node = ReactDOM.findDOMNode(instance);

    ReactTestUtils.Simulate.click(node);
    expect(callback, 'was called');
  });
});