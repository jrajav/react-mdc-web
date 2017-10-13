'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = { animating: false };
    return _this;
  }

  _createClass(Dialog, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var _this2 = this;

      var nextOpen = _ref.open;
      var open = this.props.open;

      var onOpen = !open && nextOpen;
      var onClose = open && !nextOpen;
      if (onOpen) {
        this.setState({ animating: true });
        document.body.classList.add(_constants.SCROLL_LOCK);
        document.addEventListener('keydown', function (e) {
          _this2.handleKeyDown(e);
        });
      } else if (onClose) {
        this.setState({ animating: true });
        document.body.classList.remove(_constants.SCROLL_LOCK);
        document.removeEventListener('keydown', function (e) {
          _this2.handleKeyDown(e);
        });
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      var onClose = this.props.onClose;

      var isEscape = event.key && (event.key === 'Escape' || event.keyCode === 27);
      if (onClose && isEscape) {
        onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this3 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          onClose = _props.onClose,
          open = _props.open,
          otherProps = _objectWithoutProperties(_props, ['className', 'children', 'onClose', 'open']);

      var ariaHiddenProp = open ? {} : { 'aria-hidden': true };

      return _react2.default.createElement(
        'aside',
        _extends({
          className: (0, _classnames3.default)(_constants.ROOT, (_classnames = {}, _defineProperty(_classnames, _constants.ANIMATING, this.state.animating), _defineProperty(_classnames, _constants.OPEN, open), _classnames), className),
          onClick: function onClick(e) {
            if (onClose) onClose(e);
          },
          onTransitionEnd: function onTransitionEnd() {
            _this3.setState({ animating: false });
          }
        }, ariaHiddenProp, otherProps),
        _react2.default.createElement(
          'div',
          {
            className: _constants.SURFACE,
            onClick: function onClick(e) {
              e.stopPropagation();
            }
          },
          children
        ),
        _react2.default.createElement('div', { className: _constants.BACKDROP })
      );
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  open: _propTypes2.default.bool
};
exports.default = Dialog;