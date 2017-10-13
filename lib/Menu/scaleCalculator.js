'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateInnerScales = exports.calculateScale = undefined;

var _util = require('./util');

var _constants = require('./constants');

/* eslint-disable import/no-unresolved, import/extensions*/
var TRANSITION_X1 = 0;
/* eslint-enable import/no-unresolved, import/extensions*/

var TRANSITION_Y1 = 0;
var TRANSITION_X2 = 0.2;
var TRANSITION_Y2 = 1;

var ease = function ease(time) {
  return (0, _util.bezierProgress)(time, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
};

var calculateScale = exports.calculateScale = function calculateScale(animationProgress, isOpening, numItems) {
  var currentTimeX = (0, _util.clamp)((animationProgress - _constants.TRANSITION_SCALE_ADJUSTMENT_X) / (1 - _constants.TRANSITION_SCALE_ADJUSTMENT_X));
  var currentTimeY = animationProgress;
  var startScale = isOpening ? 0 : 1;
  var targetScale = isOpening ? 1 : 0;
  var startScaleY = startScale;

  if (isOpening) {
    startScaleY = Math.max(1 / numItems, startScaleY);
    currentTimeX = (0, _util.clamp)(animationProgress + _constants.TRANSITION_SCALE_ADJUSTMENT_X);
    currentTimeY = (0, _util.clamp)((animationProgress - _constants.TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - _constants.TRANSITION_SCALE_ADJUSTMENT_Y));
  }
  var easeX = ease(currentTimeX);
  var easeY = ease(currentTimeY);
  var scaleX = startScale + (targetScale - startScale) * easeX;
  var scaleY = startScaleY + (targetScale - startScaleY) * easeY;

  return { scaleX: scaleX, scaleY: scaleY };
};

var calculateInnerScale = function calculateInnerScale(scale) {
  return 1 / (scale === 0 ? 1 : scale);
};

var calculateInnerScales = exports.calculateInnerScales = function calculateInnerScales(scales) {
  return { scaleX: calculateInnerScale(scales.scaleX),
    scaleY: calculateInnerScale(scales.scaleY)
  };
};