/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */

module.exports.diffElems = 
function diffElems(arr) {
  const unique = [];
  for (const num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }

  }

  return unique.length;
};


console.log(module.exports.diffElems([1, 3, 6, 1, 5, 1, 1])); // → 4
console.log(module.exports.diffElems([2, 4, 1, 3, 456, 78, 2, 2, 4])); // → 6
console.log(module.exports.diffElems([-10000, -4444, -4444, -4444, 12, 0, 0, 0])); // → 4
