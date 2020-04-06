"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _blocks = _interopRequireDefault(require("../../tools/output/blocks"));

/*!
 * XRegExp Unicode Blocks 4.3.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
var _default = function _default(XRegExp) {
  /**
   * Adds support for all Unicode blocks. Block names use the prefix 'In'. E.g.,
   * `\p{InBasicLatin}`. Token names are case insensitive, and any spaces, hyphens, and
   * underscores are ignored.
   *
   * Uses Unicode 12.1.0.
   *
   * @requires XRegExp, Unicode Base
   */
  if (!XRegExp.addUnicodeData) {
    throw new ReferenceError('Unicode Base must be loaded before Unicode Blocks');
  }

  XRegExp.addUnicodeData(_blocks.default);
};

exports.default = _default;
module.exports = exports["default"];