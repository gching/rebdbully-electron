define(['exports', 'module'], function (exports, module) {
  'use strict';

  var React = require('react');

  module.exports = React.createClass({
    displayName: "DisplayComponent",

    getInitialState: function getInitialState() {
      return {
        hi: 'derp'
      };
    },

    render: function render() {
      return React.createElement(
        'div',
        { id: 'display-component' },
        React.createElement(
          'h2',
          null,
          'here'
        ),
        React.createElement(
          'h1',
          null,
          undefined.state.hi
        )
      );
    }

  });
});