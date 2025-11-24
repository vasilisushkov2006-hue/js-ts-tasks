/**
 * Insert number 100 between every pair of increasing elements in array.
 * @param {number[]} arr
 * @returns {number[]}
 */
module.exports.insertHundred = function insertHundred(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);

    // Если следующий элемент больше текущего — вставляем 100
    if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
      result.push(100);
    }
  }

  // Если массив состоит из одного элемента, после него тоже добавляем 100
  if (arr.length === 1) {
    result.push(100);
  }

  return result;
};

console.log(module.exports.insertHundred([1, 2, 3, 4])); // [1, 100, 2, 3, 100, 4]
console.log(module.exports.insertHundred([-1, 1, 2])); //→ [-1, 100, 1, 100, 2]
console.log(module.exports.insertHundred([4, 4, 6]));// → [4, 4, 6]
console.log(module.exports.insertHundred([1])); // → [1, 100]
console.log(module.exports.insertHundred([1])); // → [1, 100]
