/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
 
  // находим меньший и больший предел
  const min = Math.min(start, end);
  const max = Math.max(start, end);

  // формула суммы последовательных чисел: (a + b) * n / 2
  const difference_SumOne = max - min + 1;
  const sum = ((min + max) * difference_SumOne) / 2;

  // возвращаем с округлением до 2 знаков
  return +sum.toFixed(2);
}