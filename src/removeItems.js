/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  // Helper function for deep comparison
  function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;

    // Check if both are arrays
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      return a.every((el, i) => deepEqual(el, b[i]));
    }

    // Check if both are objects (non-null)
    if (a && b && typeof a === 'object') {
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
      if (aKeys.length !== bKeys.length) return false;
      return aKeys.every(k => deepEqual(a[k], b[k]));
    }

    return false;
  }

  return arr.filter(item => !deepEqual(item, value));
}

