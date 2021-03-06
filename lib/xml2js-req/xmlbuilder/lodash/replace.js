'use strict';
const toString = require('./toString');

/** Used for built-in method references. */
const stringProto = String.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeReplace = stringProto.replace;

/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 *
 * **Note:** This method is based on
 * [`String#replace`](https://mdn.io/String/replace).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @example
 *
 * _.replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */
function replace() {
  const args = arguments;
 const string = toString(args[0]);

  return args.length < 3 ? string : nativeReplace.call(string, args[1], args[2]);
}

module.exports = replace;
