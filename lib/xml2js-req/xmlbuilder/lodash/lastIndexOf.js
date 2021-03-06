'use strict';
const indexOfNaN = require('./_indexOfNaN');
 const toInteger = require('./toInteger');

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeMax = Math.max;
 const nativeMin = Math.min;

/**
 * This method is like `_.indexOf` except that it iterates over elements of
 * `array` from right to left.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.lastIndexOf([1, 2, 1, 2], 2);
 * // => 3
 *
 * // Search from the `fromIndex`.
 * _.lastIndexOf([1, 2, 1, 2], 2, 2);
 * // => 1
 */
function lastIndexOf(array, value, fromIndex) {
  const length = array ? array.length : 0;
  if (!length) {
    return -1;
  }
  let index = length;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = (
      index < 0
        ? nativeMax(length + index, 0)
        : nativeMin(index, length - 1)
    ) + 1;
  }
  if (value !== value) {
    return indexOfNaN(array, index - 1, true);
  }
  while (index--) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = lastIndexOf;
