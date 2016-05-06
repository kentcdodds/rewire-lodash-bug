'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

exports.default = myGet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function myGet(...args) {
  return (0, _get3.default)(...args);
}
