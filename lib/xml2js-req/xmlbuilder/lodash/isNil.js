'use strict';
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(undefined);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return (value === null || value === undefined);
}

module.exports = isNil;
