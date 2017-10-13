'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired
};
var ROOT = 'mdc-radio';
var DISABLED = ROOT + '--disabled';
var BACKGROUND = ROOT + '__background';
var OUTER_CIRCLE = ROOT + '__outer-circle';
var INNER_CIRCLE = ROOT + '__inner-circle';

var Radio = function Radio(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      name = _ref.name,
      otherProps = _objectWithoutProperties(_ref, ['children', 'className', 'disabled', 'name']);

  var classes = (0, _classnames3.default)(ROOT, _defineProperty({}, DISABLED, disabled), className);
  return _react2.default.createElement(
    'div',
    {
      className: classes
    },
    _react2.default.createElement('input', _extends({
      className: 'mdc-radio__native-control',
      disabled: disabled,
      type: 'radio',
      name: name
    }, otherProps)),
    _react2.default.createElement(
      'div',
      { className: BACKGROUND },
      _react2.default.createElement('div', { className: OUTER_CIRCLE }),
      _react2.default.createElement('div', { className: INNER_CIRCLE })
    )
  );
};
Radio.propTypes = propTypes;
exports.default = Radio;