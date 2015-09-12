define(['exports', 'module', 'react'], function (exports, module, _react) {
  //var React = require('react');
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _React = _interopRequireDefault(_react);

  //import SidebarComponent from './poutine/SidebarComponent';
  //import DisplayComponent from './poutine/DisplayComponent';

  module.exports = _React['default'].createClass({
    displayName: 'MainComponent',

    render: function render() {
      return _React['default'].createElement('div', { id: 'main-component' });
    }
  });
});