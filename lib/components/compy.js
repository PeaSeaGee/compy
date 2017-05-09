'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var CompyActions = require('../actions');
var ToggleButton = require('./toggle-button');

// const debug = require('debug')('mongodb-compass:compy');

var CompyComponent = function (_React$Component) {
  _inherits(CompyComponent, _React$Component);

  function CompyComponent() {
    _classCallCheck(this, CompyComponent);

    return _possibleConstructorReturn(this, (CompyComponent.__proto__ || Object.getPrototypeOf(CompyComponent)).apply(this, arguments));
  }

  _createClass(CompyComponent, [{
    key: 'onClick',
    value: function onClick() {
      CompyActions.toggleStatus();
    }

    /**
     * Render Compy component.
     *
     * @returns {React.Component} The rendered component.
     */

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'compy' },
        React.createElement(
          'h2',
          { className: 'compy-title' },
          'CompyComponent'
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'i',
            null,
            '\uD83D\uDCA5 Clippy for Compass \uD83D\uDCA5'
          )
        ),
        React.createElement(
          'p',
          null,
          'The current status is: ',
          React.createElement(
            'code',
            null,
            this.props.status
          )
        ),
        React.createElement(ToggleButton, { onClick: this.onClick })
      );
    }
  }]);

  return CompyComponent;
}(React.Component);

CompyComponent.propTypes = {
  status: PropTypes.oneOf(['enabled', 'disabled'])
};

CompyComponent.defaultProps = {
  status: 'enabled'
};

CompyComponent.displayName = 'CompyComponent';

module.exports = CompyComponent;